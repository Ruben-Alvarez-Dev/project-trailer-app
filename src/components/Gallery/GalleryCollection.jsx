import './GalleryCollection.css';
import { useState, useEffect, useContext } from 'react';
import { CollectionItem } from './CollectionItem';
import { AppContext } from '../../contexts/AppContext';

export const GalleryCollection = ({ title, endpoint }) => {
  const [data, setData] = useState();
  const { setActiveMovie } = useContext(AppContext);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU'
    }
  };

  const fetchData = async () => {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    const mappedData = data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        date: movie.release_date,
        language: movie.original_language,
        overview: movie.overview,
        rating: movie.vote_average,
        poster: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
      };
    });
    setData(mappedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemClick = async (item) => {
    const response2 = await fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=fc1f80b194f3f02aff9e1973e07807eb&language=en-US`, options);
    const detailedData = await response2.json();
    const genres = detailedData.genres.map((genre) => genre.name);
    /* const genres = genresArray.join(', ');     */
    const runtime = `${Math.floor(detailedData.runtime / 60)}h ${detailedData.runtime % 60}min`;

    const response3 = await fetch (`https://api.themoviedb.org/3/movie/${item.id}/videos?language=en-US`, options);
    const videoData = await response3.json();
    const videoKey = videoData.results[0].key;
    
    const fullMappedMovie = {
      ...item,
      genres,
      runtime,
      videoKey
    }
   
    setActiveMovie(fullMappedMovie);
  };

  return (
    <>
      <div className="reference">
        <h2 className="collection-title">{title}</h2>
        <div className="collection">
          <div className="collection-display">
            {data && data.map((item, index) => (
              <CollectionItem key={index} item={item} onClick={() => handleItemClick(item)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
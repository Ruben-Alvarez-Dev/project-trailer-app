import './GalleryCollection.css';
import { useState, useEffect, useContext } from 'react';
import { CollectionItem } from './CollectionItem';
import { AppContext } from '../../contexts/AppContext';

export const GalleryCollection = ({ title, endpoint }) => {
  const [data, setData] = useState();
  const { activeMovie, setActiveMovie } = useContext(AppContext);

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
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      };
    });
    setData(mappedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemClick = (item) => {
    setActiveMovie(item);
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
import './App.css';
import { Hero } from './components/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { collections } from './helpers/data';
import { AppContext } from './contexts/AppContext';
import { useState, useEffect } from 'react';

export const App = () => {
  const [activeMovie, setActiveMovie] = useState(null);

  useEffect(() => {
    const fetchFirstMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzFmODBiMTk0ZjNmMDJhZmY5ZTE5NzNlMDc4NzBlYiIsInN1YiI6IjY0ZGE3ZDA5YmYzMWYyMDFjY2MwMjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9sx4LvoFY_tf3GBe96QtR_0wWw6C80n-SXdDXd123TU'
        }
      };

      const response = await fetch(collections[0].endpoint, options);
      const data = await response.json();
      const firstMovie = data.results[0];

      const mappedMovie = {
        id: firstMovie.id,
        title: firstMovie.title,
        date: firstMovie.release_date,
        language: firstMovie.original_language,
        overview: firstMovie.overview,
        rating: firstMovie.vote_average,
        poster: `https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${firstMovie.backdrop_path}`,
      };

      setActiveMovie(mappedMovie);
    };

    fetchFirstMovie();
  }, []);

  return (
    <AppContext.Provider value={{ activeMovie, setActiveMovie }}>
      <div className="app">
        <Hero />
        <Gallery endpoints={collections} />
      </div>
    </AppContext.Provider>
  );
};
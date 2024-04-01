import './InfoCard.css';
import React from 'react';

export const InfoCard = ({ activeMovie }) => {
  
  return (
    <div className="info-container">
      <div className="info-card">

        <div className="title-date">
             {activeMovie?.title} ({activeMovie?.date.slice(0, 4)})
        </div>

        <div className="language-genres-runtime">

            ({activeMovie?.language.toUpperCase()}) {activeMovie.genres} {activeMovie.runtime}

        </div>
       
        <div className="overview-title">
            Overview
        </div>

        <div className="overview-content">
          {activeMovie?.overview}
        </div>
        </div>
  
        <div className="rating">
          <span>
            {activeMovie?.rating} REACCIONES
          </span>          
          <span>
            <button>Watch Trailer</button>
          </span>
        </div>
  
  
    </div>
  );
};
import './InfoCard.css';
import React from 'react';

export const InfoCard = ({ activeMovie }) => {
  return (
    <div className="info-container">
      <div className="info-card">
        <div>
          <h2>{activeMovie?.title}</h2>
        </div>
        <div>
          PEGI * (ES) Comedy, Family, Fantasy 1h 57m
        </div>
        <div>
          {activeMovie?.overview}
        </div>
        <div>
          <h3>Vista General</h3>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div>
          {activeMovie?.rating} REACCIONES <button>TRAILER</button>
        </div>
      </div>
    </div>
  );
};
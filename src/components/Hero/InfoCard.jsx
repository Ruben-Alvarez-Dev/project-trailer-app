import './InfoCard.css';
import React from 'react';
import { ButtonWatchTrailer } from './ButtonWatchTrailer';

const getBackgroundColor = (rating) => {
  const normalizedRating = Math.max(0, Math.min(10, rating)) / 10;
  let red, green, blue;

  if (normalizedRating < 0.5) {
    red = 255;
    green = Math.round(normalizedRating * 2 * 255);
    blue = 0;
  } else {
    red = Math.round((1 - normalizedRating) * 2 * 255);
    green = 255;
    blue = 0;
  }

  return `rgb(${red}, ${green}, ${blue})`;
};

export const InfoCard = ({ activeMovie }) => {
  const backgroundColor = getBackgroundColor(activeMovie?.rating);

  return (
    <div className="info-container">
      <div className="info-card">
        <div className="title-date">
          {activeMovie?.title} ({activeMovie?.date.slice(0, 4)})
        </div>
        <div className="language-genres-runtime">
          ({activeMovie?.language.toUpperCase()}) {activeMovie?.genres?.join(', ')} {activeMovie?.runtime}
        </div>
        <div className="overview-title">Overview</div>
        <div className="overview-content">
          {activeMovie?.overview}
        </div>
        <div className="rating">
          <span style={{ backgroundColor }}>{activeMovie?.rating}</span>
            <ButtonWatchTrailer movie={activeMovie} />
        </div>
      </div>
    </div>
  );
};
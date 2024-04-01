import './Hero.css';
import React, { useContext } from 'react';
import { Backdrop } from './Backdrop.jsx';
import { GradientLeft } from './GradientLeft';
import { InfoCard } from './InfoCard';
import { AppContext } from '../../contexts/AppContext';

export const Hero = () => {
  const { activeMovie } = useContext(AppContext);

  return (
    <div className="hero">
      <Backdrop backdrop={activeMovie?.backdrop} />
      <GradientLeft />
      <InfoCard activeMovie={activeMovie} />
    </div>
  );
};
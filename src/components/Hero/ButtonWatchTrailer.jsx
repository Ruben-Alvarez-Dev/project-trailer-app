import { Light } from '@mui/icons-material'
import './ButtonWatchTrailer.css'
import React from 'react'
import { Lightbox } from './Lightbox';

export const ButtonWatchTrailer = ({ movie }) => {

  const handleClick = () => {
      alert('Watch Trailer')
  }


  return (
    <div className="buttonWatchTrailer" onClick={handleClick}>
      Watch Trailer
    </div>
  )
}

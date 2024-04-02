import { Light } from '@mui/icons-material'
import './ButtonWatchTrailer.css'
import { Lightbox } from './Lightbox';
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'


export const ButtonWatchTrailer = ({ movie }) => {

  const { showLightbox, setShowLightbox } = useContext(AppContext);
  const { videoId, setVideoId} = useContext(AppContext);

  const handleClick = () => {
      setVideoId(movie.videoKey)
      setShowLightbox(true);
  }


  return (
    <div className="buttonWatchTrailer" onClick={handleClick}>
      Watch Trailer
    </div>
  )
}

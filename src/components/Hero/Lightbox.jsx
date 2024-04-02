import './Lightbox.css'
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export const Lightbox = ({ videoId }) => {
  
  const { showLightbox, setShowLightbox } = useContext(AppContext);

  const handleClose = () => {
    setShowLightbox(false);
    console.log(showLightbox);
  }

  return (
    <div className="lightbox" onClick={handleClose}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&si=02i-babiqlrkgafW&controls=1`}
        title="YouTube video player"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className="close" onClick={handleClose}>Close</button>
    </div>
  )
}

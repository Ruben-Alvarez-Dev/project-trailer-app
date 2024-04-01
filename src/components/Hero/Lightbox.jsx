import './Lightbox.css'
import React from 'react'

export const Lightbox = ({ videoId }) => {
  return (
    <div className="lightbox">
      <iframe 
        src={`https://www.youtube-nocookie.com/embed/${videoId}?si=02i-babiqlrkgafW&amp;controls=0`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  )
}

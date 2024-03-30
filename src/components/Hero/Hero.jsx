import './Hero.css'
import poster from "../../assets/poster.jpg"
import backdrop from "../../assets/backdrop.jpeg"

import React from 'react'


export const Hero = () => {
  return (
    <div className="hero">
      
      {/* <div className="backdrop-image">
        <img src={backdrop} />
      </div> */}
      <div className="backdrop-video">
      <iframe 
        src="https://www.youtube-nocookie.com/embed/EJoom2F-7nI?si=pb7WsJQ8eqy06XH4&amp;controls=0&amp;start=10" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
      </div>

      <div className="gradient"></div>
    </div>
  )
}

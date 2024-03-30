import './Gallery.css'
import poster from '../../assets/poster.jpg'
import React from 'react'
import { GalleryCollection } from './GalleryCollection'





export const Gallery = () => {
  return (
    <div className="gallery">    
    <div className="container">
        <GalleryCollection title="Popular" />
        <GalleryCollection title="Top Rated" />
        <GalleryCollection title="Now Playing" />
      </div>
    </div>
  )
}

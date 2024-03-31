import './Gallery.css'
import poster from '../../assets/poster.jpg'
import React from 'react'
import { GalleryCollection } from './GalleryCollection'

export const Gallery = () => {
  return (
    <div className="gallery">    
        <div className="galleryStart"></div>
        <GalleryCollection className="galleryItem" title="One" />
        <GalleryCollection className="galleryItem" title="Two" />
        <GalleryCollection className="galleryItem" title="Three" />
        <GalleryCollection className="galleryItem" title="Four" />
        <GalleryCollection className="galleryItem" title="Five" />
        <GalleryCollection className="galleryItem" title="Six" />
        <div className="galleryEnd"></div>
    </div>
    
  )
}

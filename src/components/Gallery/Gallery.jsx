import './Gallery.css';
import React, { useState, useEffect, useRef } from 'react';
import { GalleryCollection } from './GalleryCollection';
import { GradientBottom } from './GradientBottom'
export const Gallery = () => {
  const [activeCollection, setActiveCollection] = useState('1');
  const galleryRef = useRef(null);

  console.log(activeCollection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCollection(entry.target.id);
          }
        });
      },
      {
        root: galleryRef.current,
        threshold: 0.75,
      }
    );

    const galleryCollections = galleryRef.current.querySelectorAll('.galleryCollection');
    galleryCollections.forEach((collection) => {
      observer.observe(collection);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const galleryCollections = galleryRef.current.querySelectorAll('.galleryCollection');
    galleryCollections.forEach((collection) => {
      const collectionId = collection.id;
      if (collectionId < activeCollection) {
        collection.style.opacity = '0';
        collection.style.transition = 'opacity 0.3s';
      } else if (collectionId > activeCollection) {
        collection.style.opacity = '0.5';
        collection.style.transition = 'opacity 0.3s';
      } else {
        collection.style.opacity = '1';
        collection.style.transition = 'opacity 0.3s';
      }
    });
  }, [activeCollection]);

  return (
    <div className="gallery" ref={galleryRef}>
      {/* <GradientBottom /> */}
      <div className="galleryStart"></div>
      <div className="galleryCollection" id="1">
        <GalleryCollection title="One" />
      </div>
      <div className="galleryCollection" id="2">
        <GalleryCollection title="Two" />
      </div>
      <div className="galleryCollection" id="3">
        <GalleryCollection title="Three" />
      </div>
      <div className="galleryCollection" id="4">
        <GalleryCollection title="Four" />
      </div>
      <div className="galleryCollection" id="5">
        <GalleryCollection title="Five" />
      </div>
      <div className="galleryCollection" id="6">
        <GalleryCollection title="Six" />
      </div>
      <div className="galleryEnd"></div>
    </div>
  );
};
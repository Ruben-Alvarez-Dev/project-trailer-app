import './Gallery.css';
import { GalleryCollection } from './GalleryCollection';
import { GradientBottom } from './GradientBottom';
import { useEffect, useRef, useState } from 'react';

export const Gallery = ({ endpoints }) => {
  const collectionRefs = useRef([]);
  const [activeCollection, setActiveCollection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          const collection = collectionRefs.current[index];
          const collectionId = index + 1;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
            collection.style.opacity = '1';
            setActiveCollection(collectionId);
          } else if (collectionId < activeCollection) {
            collection.style.opacity = '0';
          } else {
            collection.style.opacity = '0.5';
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.75,
      }
    );

    collectionRefs.current.forEach((collection) => {
      observer.observe(collection);
    });

    return () => {
      collectionRefs.current.forEach((collection) => {
        observer.unobserve(collection);
      });
    };
  }, [activeCollection]);

  useEffect(() => {
  }, [activeCollection]);

  return (
    <div className="gallery">
      <GradientBottom />
      <div className="galleryStart"></div>
      {endpoints.map((endpoint, index) => (
        <div
          key={endpoint.id}
          ref={(el) => (collectionRefs.current[index] = el)}
          data-index={index}
        >
          <GalleryCollection
            title={endpoint.title}
            endpoint={endpoint.endpoint}
            collectionId={index + 1}
          />
        </div>
      ))}
      <div className="galleryEnd"></div>
    </div>
  );
};
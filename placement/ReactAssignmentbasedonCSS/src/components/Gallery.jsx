// src/components/Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import '../styles/gallery.css';

const Gallery = () => {
    const imageCardCount = 10;
    const imageCards = [];
  
    for (let i = 0; i < imageCardCount; i++) {
      imageCards.push(<ImageCard key={i} index={i}/>);
    }
  
    return <div className="gallery">{imageCards}</div>;
  };
  

export default Gallery;

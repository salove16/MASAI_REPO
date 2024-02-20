import React from 'react';
import '../styles/imageCard.css';

const ImageCard = ({index}) => {
 
  const getRandomPrice = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const price = getRandomPrice();
  return (
    <div className="image-card">
      <img src="https://placehold.co/300x300" alt="" />
      <div className="card-content">
        <h3>random {index+1}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ImageCard;

import React from 'react';

const MovieCard = ({ title, year, image }) => {
  return (
    <div>
      <img src={image} alt={title}/>
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

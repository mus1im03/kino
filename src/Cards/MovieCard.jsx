import React from 'react';
import './MovieCard.module.css';

const MovieCard = ({ title, year, image }) => {
  return (
    <div className="movie-card">
      <img src='https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg' alt={title} />
      <div className="movie-details">
        <h2>{title}aaa</h2>
        <p>{year}bbb</p>
      </div>
    </div>
  );
};

export default MovieCard;


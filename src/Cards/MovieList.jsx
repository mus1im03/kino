import React from 'react';

import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = () => {

    const films = useSelector((state) => state.films.films )

  return (
    <div>
      {films.map((film, i) => {
        return (
          <MovieCard
           key={film._id}
           img={film.image}
           title={film.title}
           year={film.year}
          />
        );
      })}
    </div>
  );
 };

export default MovieList

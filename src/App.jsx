import React from 'react';
import Header from './Header/Header';
import MovieCard from './Cards/MovieCard';
import MovieList from './Cards/MovieList';


const App = () => {
  return (
    <div>
      <Header />
      {/* <MovieCard/> */}
      <MovieList/>
    </div>
  );
};

export default App;
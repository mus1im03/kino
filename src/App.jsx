import React from 'react';
import Header from './Header/Header';
import '../src/App.css'
import MovieList from './Cards/MovieList';



const App = () => {
  return (
    <div>
      <Header />
      <MovieList/>
    </div>
  );
};

export default App;
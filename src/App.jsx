import React from 'react';
import Header from './Header/Header';
import '../src/App.css'
import FilmBody from './Body_film_page/FilmBody';

const App = () => {

  return (
    <div>
      <Header />
      <FilmBody/>
    </div>
  );
};

export default App;
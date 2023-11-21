<<<<<<< HEAD
import React from "react";
import Header from "./Header/Header";
import "../src/App.css";
import { Route, Router } from "react-router-dom";
=======
import React from 'react';
import Header from './Header/Header';
import '../src/App.css'
import FilmBody from './Body_film_page/FilmBody';
>>>>>>> main

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <div>
        <Header />
      </div>

      {/* Роуты тут */}
      {/* <Router>
        <Route path="/genre/:genreId" element={<Products />} />
      </Router> */}
    </>
=======
    <div>
      <Header />
      <FilmBody/>
    </div>
>>>>>>> main
  );
};

export default App;
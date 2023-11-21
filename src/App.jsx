import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './Header/Header';
import "../src/App.css";
import MainContent from "./MainContent/MainContent";
import MovieList from "./Cards/MovieList";




const App = () => {
  return (

    <>
      <div>
        <Header />
        {/* <MainContent /> */}
      </div>

      {/* Роуты тут */}
      <Routes>
      {/* <Route path="/" element={<MainContent />} /> */}
        <Route path="/genre/:genreId" element={<MovieList />} />
      </Routes>
    </>

  );
};

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import MovieList from "./components/Cards/MovieList";
import FilmBody from "./Body_film_page/FilmBody";

const App = () => {
  return (
    <>
      <div>

        

        <Header />
        <FilmBody />
        {/* <MainContent /> */}

      </div>

      {/* Роуты тут */}
      <Routes>

        <Route path="/" element={<MainContent />}/>

        <Route path="/" element={<MainContent />} />

        <Route path="/genre/:genreId" element={<MovieList />} />
      </Routes>
    </>
  );
};

export default App;

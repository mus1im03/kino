import { Route, Router, Routes } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import MovieList from "./components/Cards/MovieList";
import { useSelector } from "react-redux";
import FilmBody from '../src/components/Body_film_page/FilmBody'

const App = () => {

  return (

    <>
      <div>
        <Header />
      </div>

      {/* Роуты тут */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/genre/:genreId" element={<MovieList />} />
          <Route exact path="/movies" element={<MovieList />} />
          <Route
            path="/movies/:id"
            element={<FilmBody/> }
          />
      </Routes>
    </>
  );
};

export default App;

import { Navigate, Route, Router, Routes } from "react-router-dom";
import "../src/App.css";
import MainContent from "./";
import MovieList from "./components/Cards/MovieList";
import { useSelector } from "react-redux";
import FilmBody from '../src/components/Body_film_page/FilmBody'
import SignUp from "./Pages/SignUp"; 
import SignIn from "./Pages/SignIn";
import Header from './Header/Header'

const App = () => {

  return (
    <>
      <div>
         <Header /> 
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/genre/:genreId" element={<MovieList />} />
          <Route exact path="/movies" element={<MovieList />} /> */
           <Route
            path="/movies/:id"
            element={<FilmBody/> }
          />
      </Routes>
    </>
  );
};

export default App;
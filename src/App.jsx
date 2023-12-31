import { Navigate, Route, Router, Routes } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import MovieList from "./components/Cards/MovieList";
import { useSelector } from "react-redux";
import FilmBody from "../src/components/Body_film_page/FilmBody";
import Footer from "./components/Footer/Footer";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";


const App = () => {
  return (
    <div className="container">
    
        <Header />
      
      {/* Роуты тут */}

      <Routes>
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        
        <Route path="/" element={<MainContent />} />
        <Route path="/genre/:genreId" element={<MovieList />} />
        <Route exact path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<FilmBody />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

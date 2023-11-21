import React from "react";
import Header from "./Header/Header";
import "../src/App.css";
import { Route, Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* Роуты тут */}
      {/* <Router>
        <Route path="/genre/:genreId" element={<Products />} />
      </Router> */}
    </>
  );
};

export default App;
import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "../Cards/MovieList";
import MainBanner from "../MainBanner/MainBanner";


const MainContent = () => {
  return (
    <div className={styles.container}>
      <MainBanner />
      <MovieList />
    </div>
  );
};

export default MainContent;

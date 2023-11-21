import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../features/filmSlice";
import styles from "../Cards/MovieList.module.css";

const MovieList = () => {
  const films = useSelector((state) => state.films.films);
  console.log(films);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  return (
    <div className={styles.cards}>
      {films.map((film) => {
        return (
          <div className={styles.img}>
            <p className={styles.text}>{film.name}</p>
            <p>{film.years}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;

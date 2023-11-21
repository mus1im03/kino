import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../features/filmSlice";
import styles from "../Cards/MovieList.module.css";
import { useParams } from "react-router-dom";

const MovieList = () => {

  const dispatch = useDispatch();

  const { genreId } = useParams();

  const films = useSelector((state) =>
    state.films.films.filter((film) => {
      if (!genreId) return true;

      return film.genreId === genreId;
    })
  );

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {films.map((film) => {
        console.log(film);
        return (
          <div className={styles.card}>
            <div className={styles.image_block}>
              <img src={`http://localhost:4050${film.image}`} alt="photo" />
            </div>
            <div className={styles.film_info}>
              <p className={styles.text}>{film.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;

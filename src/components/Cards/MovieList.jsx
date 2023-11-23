import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../features/filmSlice";
import styles from "./MovieList.module.css";

const MovieList = () => {
  
  const dispatch = useDispatch();

  const { genreId } = useParams();

  const films = useSelector((state) =>
    state.films.films.filter((film) => {
      if (!genreId) return true;

      return film.genreId.includes(genreId);
    })
  );

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
      <div className={styles.cards}>
        {films.map((film) => {
          return (
            <Link
              to={`/movies/${film._id}`}
              key={film._id}
              className={styles.link}
            >
              <div className={styles.card}>
                <div className={styles.image_block}>
                  <img src={`http://localhost:4050${film.image}`} alt="photo" />
                </div>
                <div className={styles.film_info}>
                  <p className={styles.text}>{film.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
  );
};

export default MovieList;

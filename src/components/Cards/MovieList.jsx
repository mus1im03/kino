import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../features/filmSlice";
import styles from "./MovieList.module.css";
import icon from "../../assets/img/icons8-закладка-480.png";

const MovieList = () => {
  const [seeInfo, setSeeInfo] = useState({});

  const dispatch = useDispatch();

  const { genreId } = useParams();

  const films = useSelector((state) =>
    state.films.films.filter((film) => {
      if (!genreId) return true;

      return film.genreId.includes(genreId);
    })
  );

  const handleCard = (filmId) => {
    setSeeInfo({ ...seeInfo, [filmId]: !seeInfo[filmId] });
  };

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
            // onMouseEnter={() => handleCard(film._id)}
            // onMouseLeave={() => setSeeInfo(false)}
          >
            <div
              className={styles.full_card}
              onMouseEnter={() => handleCard(film._id)}
              onMouseLeave={() => setSeeInfo(false)}
            >
              <div className={styles.card}>
                <div className={styles.image_block}>
                  <img
                    src={`http://localhost:4050${film.image}`}
                    alt="photo"
                    className={styles.card_image}
                  />
                </div>
                <div className={styles.film_info}>
                  <p className={styles.text}>{film.name}</p>
                </div>
              </div>
              {seeInfo[film._id] && (
                <div className={styles.info_card}>
                  <a href="">
                    <img src={icon} alt="" className={styles.icon} />
                  </a>
                  <span className={styles.card_grade}>{film.grade}</span>
                  <div className={styles.info_sec_block}>
                    <span className={styles.card_years}>{film.years},</span>
                    <span className={styles.card_country}>{film.country}</span>
                  </div>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;

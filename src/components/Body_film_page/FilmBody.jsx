import React, { useEffect, useState } from "react";
import styles from "../Body_film_page/filmBody.module.css";
import img from "../../assets/img/Warrior_Poster.jpg";
import YoutubePlayer from "./youtube";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import FilmBody_Comment from "./FilmBodyComment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../features/filmSlice";

function FilmBody({ comment }) {

  const dispatch = useDispatch()

  const { id } = useParams();

  const selectedFilm = useSelector((state) => state.films.films.find((film) => film._id === id));

console.log(selectedFilm)
  useEffect(() => {
    window.scroll(0,0)
    dispatch(fetchFilms());
  }, [dispatch]);

  if(!selectedFilm) {
    return 'Loading'
  }

  return (
    <main className={styles.osnova}>
          <div className={styles.oblojka}>
            <div className={styles.perviyBlock}>
              <div className={styles.img}>
                <img src={`http://localhost:4050${selectedFilm?.image}`} alt="photo" />
              </div>
              <div className={styles.opisanie}>
                <h3>{selectedFilm?.name} смотреть онлайн в HD</h3>
                <p>Описание: {selectedFilm?.description}</p>
              </div>
            </div>
            <div className={styles.vtoroyBlock}>
              <div className={styles.params}>
                <h3>Год: {selectedFilm?.years}</h3>
                <h3>Страна: {selectedFilm?.country}</h3>
                <h3>Качество 1080: HDRih3</h3>
                <h3>Перевод: Оригинал</h3>
                <h3>Продолжительность: {selectedFilm?.duration}</h3>
              </div>
              <div className={styles.params2}>
                <div className={styles.text}>
                  <p>Режиссер: {selectedFilm?.director}</p>
                  <p>В ролях: {selectedFilm?.cast}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.player}>
            <YoutubePlayer video={selectedFilm?.url} />
          </div>
          <div className={styles.ocenka}>
            <button className={styles.like}>
              <AiOutlineLike />
              10
            </button>
            <span className={styles.reiting}>{selectedFilm.grade} Оценка</span>
            <button className={styles.dislike}>
              <AiOutlineDislike />2
            </button>
          </div>
          <div className={styles.filmComment}>
            <FilmBody_Comment text={comment} />
          </div>
    </main>
  );
}

export default FilmBody;

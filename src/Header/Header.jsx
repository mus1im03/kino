import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/img/reposition_iviLogoPlateRounded.svg";
import "./Header.css";
import icon from "../assets/img/icons8-человек-64.png";
import { fetchGenres } from "../features/genreSlice";

const Header = () => {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres.genres);

  const [seeGenres, setSeeGenres] = useState(false);

  const handleGenres = () => {
    setSeeGenres(!seeGenres);
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <header>
      <div className={styles.header_block}>
        <div className={styles.img_block}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={styles.categories}>
          <li href="" className="nav">
            Главная
          </li>
          <li className="nav" onMouseEnter={() => handleGenres()}>
            Жанры
          </li>
          <li href="" className="nav">
            Фильмы
          </li>
          <li href="" className="nav">
            Сериалы
          </li>
          <li href="" className="nav">
            Мультфильмы
          </li>
        </ul>
        <div className={styles.input_block}>
          <input type="text" id="" placeholder="Введите название" />
        </div>
        <div className={styles.login_button}>
          <button className={styles.login_button}>
            <img src={icon} alt="icon" className={styles.icon_button} />
            <span>Войти</span>
          </button>
        </div>
      </div>
      <div>
        {seeGenres &&
          <div>{genres.map(genre => {
            return <li className={styles.genres_block}>{genre.title}</li>;
          })}</div>}
      </div>
    </header>
  );
};

export default Header;

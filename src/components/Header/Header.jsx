import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/reposition_iviLogoPlateRounded.svg";
import "./Header.css";
import icon from "../../assets/img/icons8-человек-64.png";
import { fetchGenres } from "../../features/genreSlice";
import { fetchFilms } from "../../features/filmSlice";
import { logOut } from "../../features/applicationSlice";

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.application.token);

  const genres = useSelector((state) => state.genres.genres);

  const films = useSelector((state) => state.films.films);

  const [seeGenres, setSeeGenres] = useState(false);

  const [value, setValue] = useState("");

  const handleGenres = () => {
    setSeeGenres(!seeGenres);
  };

  const handleLogout = () => {
    dispatch(clearToken()); 
  };

  const filtered = films.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchGenres(), fetchFilms());
  }, [dispatch]);

  const headerBlockStyle = {
    backgroundColor: seeGenres ? "#242131" : "transparent",
    borderTopLeftRadius: seeGenres && "15px",
    borderTopRightRadius: seeGenres && "15px",
  };

  const headerBlockStyl = {
    backgroundColor: seeGenres ? "#242131" : "transparent",
    borderBottomLeftRadius: seeGenres && "15px",
    borderBottomRightRadius: seeGenres && "15px",
    transition: seeGenres && "backgroundColor 0.2s ease",
  };

  return (
    <header>
      <div className={styles.header_block} style={headerBlockStyle}>
        <div
          className={styles.img_block}
          onMouseLeave={() => setSeeGenres(false)}
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={styles.categories}>
          <Link to="/" className="nav first">
            Главная
          </Link>
          <li className="nav genres" onMouseEnter={() => handleGenres()}>
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
          <input
            type="text"
            id=""
            placeholder="Введите название"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.input_btn}></button>
        </div>
        <div className={styles.login_button}>
          {!token ? (
            <Link to="/login">
              <button className={styles.login_button}>
                <img src={icon} alt="icon" className={styles.icon_button} />
                <span>Войти</span>
              </button>
            </Link>
          ) : (
            <button className={styles.profil_button}>
              <img src={icon} alt="icon" className={styles.icon_button} />
              <span onClick={() => dispatch(logOut())}>Выйти</span>
            </button>
          )}
        </div>
      </div>
      {seeGenres && (
        <div
          className={styles.film_category}
          style={headerBlockStyl}
          onMouseLeave={() => setSeeGenres(false)}
        >
          <span>Жанры</span>
          <div className={styles.genres_block}>
            {genres.map((genre) => {
              return (
                <Link
                  to={`/genre/${genre._id}`}
                  className={styles.genres_names}
                >
                  {genre.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <ul className={styles.item}>
        {value &&
          filtered.map((movie) => (
            <Link to={`/movies/${movie._id}`} key={movie.id}>
              <li className={styles.item_li}>{movie.name}</li>
            </Link>
          ))}
      </ul>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "../Body_film_page/filmBody.module.css";
import img from "../assets/img/Warrior_Poster.jpg";
import YoutubePlayer from "./youtube";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const FilmBody = () => {
  return (
    <main className={styles.osnova}>
      <div className={styles.oblojka}>
        <div className={styles.perviyBlock}>
          <div className={styles.img}>
            <img src={img} alt="" />
          </div>
          <div className={styles.opisanie}>
            <h3>Воин (2011) смотреть онлайн в HD</h3>
            <p>
              Описание: Четырнадцать лет подряд Томми Конлон не посещал родные
              места, после того как страшно разругался с отцом. Следует
              отметить, в далекой молодости Пэдди, глава семейства, считался
              подающим огромные надежды боксером, однако постепенно загубил
              собственный талант. В итоге, горе-спортсмен начал топить свое горе
              в бутылке, незаметно превратившись в законченного алкоголика,
              из-за чего младший сынишка, не выдержав столь невыносимого
              существования, однажды подался в сольное плавание. Правда, скудное
              финансовое положение все-таки вынудило главного героя вернуться
              домой. Мало того, услыхав о том, что вскоре в их городке должен
              будет пройти престижный турнир по боям без правил, блудный сын
              отныне намерен упросить "старика" поднатаскать его на ринге и
              показать несколько приемов. Параллельно с этим Брендан, старший
              брат Тома, бывший профессиональный участник всевозможных
              чемпионатов по смешанным единоборствам, на данный момент
              переквалифицировавшийся в обычного школьного учителя, также
              сталкивается с серьезными проблемами. Его уволили с работы, а в
              банке отказали в выдаче кредита. Понимая, что только возвращение в
              большой спорт поможет ему подзаработать, мужчина приступает к
              усиленным тренировкам. Но что, если родственники случайно
              встретятся в одном поединке? Как в этом случае будут развиваться
              события?
            </p>
          </div>
        </div>
        <div className={styles.vtoroyBlock}>
          <div className={styles.params}>
            <h3>Год: 2011</h3>
            <h3>Страна: США</h3>
            <h3>Жанр: Драма, Спорт</h3>
            <h3>Качество 1080: HDRih3</h3>
            <h3>Перевод: Оригинал</h3>
            <h3>Продолжительность: 140 мин. / 02:20</h3>
          </div>
          <div className={styles.params2}>
            <div className={styles.text}>
              <p>Режиссер: Гэвин О’Коннор</p>
              <p>
                В ролях: Джоэл Эдгертон, Том Харди, Ник Нолти, Дженнифер
                Моррисон, Фрэнк Грилло, Кевин Данн, Максимилиано Эрнандес,
                Брайан Коллен, Гэвин О’Коннор, Сэм Шеридан
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.player}>
        <YoutubePlayer />
      </div>
      <div className={styles.ocenka}>
        <button className={styles.like}>
          <AiOutlineLike />
          10
        </button>
        <span className={styles.reiting}>8.3 Оценка</span>
        <button className={styles.dislike}>
          <AiOutlineDislike />2
        </button>
      </div>
    </main>
  );
};

export default FilmBody;

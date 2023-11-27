import React from "react";
import Flickity from "react-flickity-component";
import "./MainBanner.css";
import slide1 from "../../assets/img/slide1.jpeg";
import slide2 from "../../assets/img/slide2.jpeg";
import slide3 from "../../assets/img/slide3.jpeg";
import slide1title from "../../assets/img/slide1title.png";
import slide2title from "../../assets/img/slide2title.png";
import slide3title from "../../assets/img/slide3title.png";

const MainBanner = () => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    autoPlay: 1000,
  };

  const films = {
    id: [1, 2, 3],
    title: [
      "Общение с духами не должно длиться дольше 90 секунд, но Мия нарушает правила. Главный хоррор года",
      "Джейсон Стэйтем, Дольф Лундгрен, Меган Фокс, Сильвестр Сталлоне и тд спасают мир. Не опять, а снова",
    ],
    secImg: [slide1title, slide2title, slide3title],
    image: [slide1, slide2, slide3],
  };

  return (
    <div className="App">
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {films["id"].map((index) => {
          return (
            <div key={index} className="Plate">
              <>
                <img
                  src={films["secImg"][index - 1]}
                  alt=""
                  className="secImg"
                />
                <div className="imageTitle">{films["title"][index - 1]}</div>
                <div
                  style={{
                    backgroundImage: `url(${films["image"][index - 1]})`,
                    width: "100%",
                    height: 500,
                    backgroundSize: "cover",
                    borderRadius: "32px",
                  }}
                  className="firstImg"
                ></div>
              </>
            </div>
          );
        })}
      </Flickity>
    </div>
  );
};

export default MainBanner;

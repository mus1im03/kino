import React from "react";
import Flickity from "react-flickity-component";
import "./MainBanner.css";
import slide1 from "../../assets/img/slide1.jpeg";
import slide2 from "../../assets/img/slide2.jpeg";
import slide3 from "../../assets/img/slide3.jpeg";

const MainBanner = () => {
  const flickityOptions = {
    initialIndex: 2,
  };

  const films = {
    id: [1, 2, 3],
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
                <div
                  style={{
                    backgroundImage: `url(${films["image"][index - 1]})`,
                    width: "100%",
                    height: 500,
                    backgroundSize: "cover",
                    borderRadius: '32px'
                  }}
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

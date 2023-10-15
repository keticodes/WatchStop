import React, { useState, useEffect } from "react";
import "../css/slider.css";
import sliderLeft from "../../assets/slider-left.svg";
import sliderRight from "../../assets/slider-right.svg";

const Slider = ({ itemData }) => {
  const [current, setCurrent] = useState(0);
  const length = itemData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const autoPlay = () => {
    nextSlide();
  };

  useEffect(() => {
    const timer = setInterval(autoPlay, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="slider-wrapper">
      {itemData.map((item, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="slider-content-wrapper">
                <button className="slider-prev" onClick={prevSlide}>
                  <img src={sliderLeft} alt="" height="20px" width="20px" />
                </button>
                <div className="slider-content">
                  <h1>{item.text}</h1>
                  <img
                    src={item.img}
                    width={"500px"}
                    height={"550px"}
                    alt="watch"
                  />
                </div>
                <button className="slider-next" onClick={nextSlide}>
                  <img src={sliderRight} alt="" height="20px" width="20px" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

import React, { useState } from "react";
import "../css/slider.css";
const Slider = ({ itemData }) => {
  const [current, setCurrent] = useState(0);
  const length = itemData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="slider-wrapper">
      {itemData.map((item, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="slider-content-wrapper">
                <button className="slider-prev" onClick={prevSlide}>
                  <img
                    src="../../src/assets/slider-left.svg"
                    alt=""
                    height="20px"
                    width="20px"
                  />
                </button>
                <div className="slider-content">
                  <h1>{item.text}</h1>
                  <img src={item.img} width={"500px"} alt="watch" />
                </div>
                <button className="slider-next" onClick={nextSlide}>
                  <img
                    src="../../src/assets/slider-right.svg"
                    alt=""
                    height="20px"
                    width="20px"
                  />
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

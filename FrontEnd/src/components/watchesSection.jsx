import React from "react";
import "./css/watchsection.css";
import { watchData } from "./data/watchData";

const WatchesSection = () => {
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * watchData.length);
    return watchData[randomIndex].img;
  }
  const randomImageURL = getRandomImage();

  return (
    <div id="Watches-section">
      <div className="watches-section-title">
        <h2>WATCHES</h2>
      </div>
      <div className="watches-section-content">
        <img src={randomImageURL} alt="Watch 1" />
        <img src={randomImageURL} alt="Watch 2" />
        <img src={randomImageURL} alt="Watch 3" />
      </div>
    </div>
  );
};

export default WatchesSection;

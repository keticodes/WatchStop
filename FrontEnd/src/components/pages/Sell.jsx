import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/Sell.css";
import CameraImage from "../../assets/camera.svg";

const Sell = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [BannerImageUrl, setBannerUrl] = useState(CameraImage); // Initialize with your image

  const clickBannerButton = () => {
    document.getElementById("upload-banner").click();
  };

  const handleBannerChange = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const imageUrl = URL.createObjectURL(uploadedImage);
      setBannerUrl(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const watchData = {
      description,
      price,
      city,
      BannerImageUrl,
    };

    try {
      console.log("Watch data submitted successfully");
    } catch (error) {
      console.error("An error occurred while submitting watch data:", error);
    }

    setDescription("");
    setPrice("");
    setCity("");
    setBannerUrl(CameraImage); // Reset to your default image
  };

  return (
    <div id="Sell-wrapper">
      <form id="Sell-form" onSubmit={handleSubmit}>
        <div className="Sellyourwatch">
          <h1>Sell your Watch</h1>
          <div className="image-upload">
            <button className="Banner-button" onClick={clickBannerButton}>
              {BannerImageUrl === CameraImage ? (
                <img
                  src={BannerImageUrl}
                  alt=""
                  id="User-uploaded-photo"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              ) : (
                <img
                  src={BannerImageUrl}
                  alt=""
                  id="User-uploaded-photo"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              )}
            </button>
            <input
              type="file"
              id="upload-banner"
              onChange={handleBannerChange}
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className="watch-description">
            <Input text="Watch Description" value={description} setValue={setDescription} />
            <Input text="Price" value={price} setValue={setPrice} />
            <Input text="City" value={city} setValue={setCity} />
          </div>
          <Button text="Sell Watch" />
        </div>
      </form>
    </div>
  );
};

export default Sell;

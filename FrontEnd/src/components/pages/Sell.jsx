import React, { useState } from "react";
import Input from "../Elements/input";
import Button from "../Elements/button";
import "../css/Sell.css";
import CameraImage from "../../assets/camera.svg";
import useSell from "../Hooks/useSell";

const Sell = () => {
  const [name, setName] = useState("");
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
      name,
      description,
      price,
      city,
      imageUrl: BannerImageUrl,
    };

    try {
      const response = await useSell(watchData);
      console.log("Watch data submitted successfully", response);
    } catch (error) {
      console.error("An error occurred while submitting watch data:", error);
    }

    setDescription("");
    setPrice("");
    setCity("");
    setName("");
    setBannerUrl(CameraImage);
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
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "none",
                    objectFit: "cover",
                  }}
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
          <Input text="Name" value={name} setValue={setName} />
          <div className="watch-description">
            <Input
              text="Watch Description"
              value={description}
              setValue={setDescription}
            />
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

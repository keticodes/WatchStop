import React from 'react';
import "../css/buy.css";

const ProfileMobile = () => (
  <div className="profile-mobile">
    <div className="register-mobile" />
    <div className="location">Location</div>
    <div className="navbar">
      <div className="left-side">
        <div className="side-nav">
          <div className="rectangle03" />
          <div className="rectangle02" />
          <div className="rectangle01" />
        </div>
      </div>
      <div className="title">
        <div className="wristshop">WRISTSHOP</div>
      </div>
      <div className="navbar" />
    </div>
    <img className="right-side-icon" alt="" src="/right-side.svg" />
    <img className="location-pin-icon" alt="" src="/comment.svg" />
    <img className="right-side-icon1" alt="" src="/right-side.svg" />
    <div className="seller">Seller</div>
    <div className="rolex-datejust">{`Rolex Datejust `}</div>
    <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
    <div className="text">
      <div className="text1">
        <div className="model-rolex-126334-0002-container">
          <p className="hours-minutes-seconds">
            {`Model: `}
            <a
              className="rolex"
              href="https://watchbase.com/rolex"
              target="_blank"
            >
              <span className="span">Rolex</span>
            </a>
            {` `}
            <a
              className="rolex"
              href="https://watchbase.com/rolex/datejust-41/126334-0002"
              target="_blank"
            >
              <span className="span">126334-0002</span>
            </a>
            {` `}
          </p>
          <p className="hours-minutes-seconds">
            Name: Datejust 41 Stainless Steel Fluted / Jubilee / Blue
            Movement: Rolex caliber 3235
          </p>
          <p className="hours-minutes-seconds">
            Hours, Minutes, Seconds | Date | Chronometer
          </p>
          <p className="hours-minutes-seconds">{`Materials: White Gold, Stainless Steel Glass: Sapphire `}</p>
          <p className="hours-minutes-seconds">
            Size: 41.00 mm Lug Width: 21.00 mm W/R: 100.00 m
          </p>
          <p className="hours-minutes-seconds">
            Colour: Blue Finish: Sunburst Indexes: Stick / Dot Hands: Stick
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileMobile;

import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="footer-title">
        <h2>WRISTSTOP</h2>
      </div>
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <h3>CONTACT US</h3>
          <p>Email: Placeholder@gmail.com</p>
          <p>Phone: Placeholder</p>
          <p>Placeholder</p>
        </div>
        <div className="footer-content">
          <h3>ADDRESS</h3>
          <p>Placeholder: Placeholder</p>
          <p>Placeholder: Placeholder</p>
          <p>Placeholder: Placeholder</p>
        </div>
        <div className="footer-content">
          <h3>FOLLOW US</h3>
          <p>INSTAGRAM</p>
          <p>TIKTOK</p>
          <p>TWITTER</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

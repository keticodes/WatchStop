import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="footer-title">
        <h2>WRISTSHOP</h2>
      </div>
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <h3>CONTACT US</h3>
          <p>Email: wriststop@mail.com</p>
          <p>Phone: 444444444</p>
          <p>Placeholder</p>
        </div>
        <div className="footer-content">
          <h3>ADDRESS</h3>
          <p>1234 Wristshop Street</p>
          <p>Placeholder</p>
          <p>Placeholder</p>
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

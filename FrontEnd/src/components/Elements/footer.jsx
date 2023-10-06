import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer-section_padding">
        <h2>WristShop</h2>
        <div className="sb__footer-content-wrapper">
          <div className="sb__footer-content-div">
            <h3>Contact Us</h3>
            <p>Email: wriststop@mail.com</p>
            <p>Phone: 444444444</p>
            <p>Placeholder</p>
          </div>
          <div className="sb__footer-content-div">
            <h3>Address</h3>
            <p>1234 Wristshop Street</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
          </div>
          <div className="sb__footer-content-div">
            <h3>Follow Us</h3>
            <p>Instagram</p>
            <p>Tiktok</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

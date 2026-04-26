import React from 'react';
import '../component/style/footer.css';

import logo from '../assets/logo.png';
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <p>The smartest way to <br />build "real" wealth</p>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>CONTACTS</h4>

          <p>hello@getfrax.com</p>
          <p>+91 92666 85854</p>
          <p>
            First Floor, Plot 17, Golf Course Rd,<br />
            Sector 28, Gurugram, Haryana 122002
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>FRAX DIGITAL PVT LTD © 2025</p>

        <div className="footer-links">
          <span>Consent Policy</span>
          <span>Privacy Policy</span>
          <span>Refunds & Cancellations</span>
          <span>Terms & Conditions</span>
        </div>

      </div>

    </div>
  );
}

export default Footer;
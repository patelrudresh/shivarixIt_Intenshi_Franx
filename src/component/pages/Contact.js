import React from 'react';
import '../style/contact.css';

import mobile2 from '../../assets/mobile2.avif';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
import star from '../../assets/star.png';

function Contact() {
  return (
    <div className="contact-section">

      {/* TOP BUTTON */}
      
      {/* MOBILE IMAGE */}
      <div className="mobile-box">
        <img src={mobile2} alt="mobile" />
      </div>

      {/* CTA BUTTON */}
      <button className="start-btn">Start investing today</button>

      {/* STORE + RATINGS */}
      <div className="store-section">

        <div className="store">
          <img src={playstore} alt="playstore" />
          <span>4.8</span>
        <span className="stars">  ⭐⭐⭐⭐</span>
          {/* <img src={star} alt="star" className="star" /> */}
        </div>

        <div className="store">
          <img src={appstore} alt="appstore" />
          <span>4.7</span>
         <span className="stars">  ⭐⭐⭐⭐</span>
          {/* <img src={star} alt="star" className="star" /> */}
        </div>

      </div>

    </div>
  );
}

export default Contact;
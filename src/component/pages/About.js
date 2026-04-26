import React from 'react';
import '../style/about.css'
import card1 from '../../assets/card1.avif';
import card2 from '../../assets/card2.avif';

function About() {
  return (
    <div className="about">

      <h1>
        Wealth isn't built by <br /> chasing returns.
      </h1>

      <h3>
        It's built by owning the 
        <span style={{ color: "green" }}> right asset class </span> 
        at the 
        <span style={{ color: "green" }}> right time</span>
      </h3>

      {/* 🔥 IMPORTANT */}
      <div className="cards">

        <div className="card">
          <img src={card1} alt="property1" />
        </div>

        <div className="card">
          <img src={card2} alt="property2" />
        </div>

      </div>

      <h3>
        Your portfolio has 
        <span style={{ color: "green" }}> mutual funds, stocks, FDs, gold </span>
      </h3>

      <h1>
        but diversifying into real estate still feels out of reach.
      </h1>

    </div>
  );
}

export default About;
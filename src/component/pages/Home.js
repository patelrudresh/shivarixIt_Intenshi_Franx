import React from 'react'
import img1 from '../../assets/img1.avif';
import star from '../../assets/star.png';
import mobilemain from '../../assets/mobilemain.avif';
import '../style/home.css';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
import iciciBank from '../../assets/iciciBank.avif';
import hyper from '../../assets/hyper.avif';
import digilocker from '../../assets/digilocker.avif';
import cashfree from '../../assets/cashfree.avif';
import rblbank from '../../assets/rblbank.avif';
import rozopay from '../../assets/rozopay.avif';
import univers from '../../assets/univers.avif';

function Home() {
  return (
    <div className="home animate-home">

      {/* LEFT */}
      <div className='left'>

        {/* 🔥 Badge Box */}
        <div className="badge-box">
          <img src={img1} alt="tag" className="badge" />
          <span className="invested">₹1 Cr+ Invested</span>
        </div>

        <h1>
          Invest in India's <br />
          Premium Real Estate
        </h1>

        <div className="features">
          <p><img src={star} alt="" /> Start investing from ₹10K</p>
          <p><img src={star} alt="" /> High returns opportunity</p>
          <p><img src={star} alt="" /> Secure & trusted platform</p>
        </div>

        <p className="rating">
          ⭐⭐⭐⭐⭐ 4.8 <span className="divider">|</span> 4.8K (5K downloads)
        </p>

        <div className="download-buttons">
          <img src={playstore} alt="playstore" className="store-btn" />
          <img src={appstore} alt="appstore" className="store-btn" />
        </div>

      </div>

      {/* RIGHT */}
      <div className='right'>
        <img src={mobilemain} alt="mobile" />
      </div>

      {/* LOGOS */}
      <div className="logo-section">
        <div className="logo-row">
          <img src={iciciBank} alt="logo" />
          <img src={hyper} alt="logo" />
          <img src={digilocker} alt="logo" />
          <img src={cashfree} alt="logo" />
          <img src={rblbank} alt="logo" />
          <img src={rozopay} alt="logo" />
          <img src={univers} alt="logo" />
        </div>
      </div>

    </div>
  )
}

export default Home
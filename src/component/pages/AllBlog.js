import React from 'react';
import '../style/allblogs.css';

import img1 from '../../assets/blog1.avif';
import img2 from '../../assets/blog2.avif';
import img3 from '../../assets/blog3.avif';
import img4 from '../../assets/blog4.avif';
import img5 from '../../assets/blog5.avif';
import img6 from '../../assets/blog5.avif';
import img7 from '../../assets/blog7.avif';
import img8 from '../../assets/blog8.avif';
// import img9 from '../../assets/blog.avif';
import img10 from '../../assets/blog10.avif';
import img11 from '../../assets/blog11.avif';
import img12 from '../../assets/blog12.avif';
import img13 from '../../assets/blog12.avif';
function AllBlogs() {

  const data = [
    { img: img1, date: "Mar 24, 2026", title: "How FraX Is Digitising Real Estate Investing - Bringing Structure to a Historically Chaotic Asset Class" },
    { img: img2, date: "Mar 24, 2026", title: "Risk and Reward: A Smart Investor's Guide to Fractional Real Estate" },
    { img: img3, date: "Mar 24, 2026", title: "₹1 Crore: A Small Builder Flat or Fractions of Premium Properties?" },
    { img: img4, date: "Mar 24, 2026", title: "Why Real Estate is the Best Long-Term Investment" },
    { img: img6, date: "Mar 24, 2026", title: "Top Cities for Real Estate Investment in India" },
    { img: img6, date: "Mar 24, 2026", title: "How to Start Investing with Low Budget" },
    { img: img7, date: "Mar 24, 2026", title: "Future of Fractional Ownership" },
    { img: img8, date: "Mar 24, 2026", title: "Benefits of Diversified Investment" },
    { img: img11, date: "Mar 24, 2026", title: "Real Estate vs Stock Market" },
     { img: img12, date: "Mar 24, 2026", title: "Benefits of Diversified Investment" },
    { img: img13, date: "Mar 24, 2026", title: "Real Estate vs Stock Market" },
  ];

  return (
    <div className="allblogs">

      <h1>The FRAX Journal</h1>

      <div className="blog-grid">

        {data.map((item, index) => (
          <div className="blog-card" key={index}>

            <img src={item.img} alt="blog" />

            <p className="date">{item.date}</p>

            <h3>{item.title}</h3>

          </div>
        ))}

      </div>
 <button className="contact-btn">Contact us</button>

    </div>
  );
}

export default AllBlogs;
import React from 'react';
import '../style/blog.css';

import blog1 from '../../assets/invest.png';
import blog2 from '../../assets/ghar.png';
import blog3 from '../../assets/flor.png';
import { useNavigate } from 'react-router-dom';

function Blog() {

  const data = [
    {
      img: blog1,
      text: "₹1 Crore: A Small Builder Flat or Fractions of Premium Properties?"
    },
    {
      img: blog2,
      text: "Risk and Reward: A Smart Investor's Guide to Fractional Real Estate"
    },
    {
      img: blog3,
      text: "How FraX Is Digitising Real Estate Investing - Bringing Structure to a Historically Chaotic Asset Class"
    }
  ];
 const navigate = useNavigate();

  return (
    <div className="blog-section">

      <h1>Our Blog</h1>

      <div className="blog-cards">

        {data.map((item, index) => (
          <div  className="blog-card" 
      key={index}
      style={{ backgroundImage: `url(${item.img})` }}>

            {/* <img src={item.img} alt="blog" /> */}

            <div className="blog-content">
              <p>{item.text}</p>
              <button>Read More</button>
            </div>

          </div>
        ))}

      </div>
<button className="all-btn" onClick={() => navigate("/all-blogs")}>
  All Blogs
</button>

    </div>
  );
}

export default Blog;
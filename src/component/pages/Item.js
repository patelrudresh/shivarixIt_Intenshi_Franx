import React from 'react';
import '../style/item.css';

import mobile1 from '../../assets/mobile1.avif';
import mobile2 from '../../assets/mobile2.avif';
import mobile3 from '../../assets/mobile3.avif';
import mobile4 from '../../assets/mobile4.avif';
import mobile5 from '../../assets/mobile5.avif';

function Item() {
  const data = [
    {
      title: "Get over 92% return",
      subtitle: "within 5 years",
      img: mobile1
    },
    {
      title: "Buy and Sell Anytime",
      subtitle: "with no lock-in period",
      img: mobile2
    },
    {
      title: "Own Top 1% Properties",
      subtitle: "in India",
      img: mobile3
    },
    {
      title: "Earn Rental Income",
      subtitle: "proportional to your investment",
      img: mobile4
    },
     {
      title: "Fully Compliant & Secure",
      subtitle: "with ICICI Bank",
      img: mobile5
    }
  ];

  return (
    <div className="item-section">
      <h1>With FraX, you can</h1>

      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            
            <div className="card-left">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>

            <div className="card-right">
              <img src={item.img} alt="card" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
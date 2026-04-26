import React, { useRef } from 'react';
import '../style/investors.css';

// 🔥 videos import karo
import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4';
import video3 from '../../assets/video/video3.mp4';
import video4 from '../../assets/video/video4.mp4';
import video5 from '../../assets/video/video5.mp4';
import video6 from '../../assets/video/video6.mp4';

function Investors() {

    const scrollRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    };

    // 🔥 data array (clean & scalable)
    const data = [
        { video: video1, text: "Real Estate felt impossible until Frax.", name: "Isha Mukharjee" },
        { video: video2, text: "Now I own premium properties for 20k.", name: "Rahul Sharma" },
        { video: video3, text: "Best investment platform I’ve used.", name: "Ankit Verma" },
        { video: video4, text: "Easy and transparent process.", name: "Priya Singh" },
        { video: video5, text: "Great returns and low entry.", name: "Neha Jain" },
        { video: video6, text: "Highly recommended for beginners.", name: "Aman Gupta" },
    ];

    return (
        <div className="investors-section">

            <h1>Our Investors</h1>

            <div className="slider-container">

                <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

                <div className="cards" ref={scrollRef}>

                    {data.map((item, index) => (
                        <div className="card" key={index}>

                            <video controls>
                                <source src={item.video} type="video/mp4" />
                            </video>

                            <div className="card-content">
                                <h3>{item.text}</h3>
                                <p>{item.name}</p>
                            </div>

                        </div>
                    ))}

                </div>

                <button className="scroll-btn right" onClick={scrollRight}>›</button>

            </div>

        </div>
    );
}

export default Investors;
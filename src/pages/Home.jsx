import React, { useState, useEffect } from 'react';
import '../styles/home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/j1.jpg',
    '/images/j2.JPG',
    '/images/j3.JPG',
    '/images/j4.jpg',
    '/images/j5.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="home-container">
      <h1>Bio:</h1>
      <p>
        Guitar Instructor & Audio Producer | Auckland NZ
      </p>
      <p>
        With over 20 years of experience, I have honed my craft as a Guitarist and Audio Producer in Auckland. My musical journey has led me to share stages with world-renowned extreme bands and self-produce tracks that have reached global audiences through prestigious labels.
      </p>
      <p>
        My dual expertise as a guitarist and drummer, combined with my skills as an audio engineer, allows me to offer a progressive, dynamic approach to both teaching and production. I am passionate about helping my clients unlock their full potential, fueling their creativity, and guiding them toward their musical aspirations.
      </p>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      <footer className="home-footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/jag666/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@jagmetal"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <div className="footer-credit">
          <small>© JagwinderSingh2025</small>
        </div>
      </footer>
    </div>
  );
}

export default Home;


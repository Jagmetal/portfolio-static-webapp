import React, { useState, useEffect } from 'react';
import '../styles/home.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const basePath = import.meta.env.BASE_URL;

  const slides = [
    `${basePath}images/j1.jpg`,
    `${basePath}images/j2.JPG`,
    `${basePath}images/j3.JPG`,
    `${basePath}images/j4.jpg`,
    `${basePath}images/j5.jpg`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        <div className="hero-content">
          <h1 className="hero-name">Jagwinder Singh</h1>

          <p className="hero-tag">
            Precision. Control. Extreme Musicality.
          </p>

          <p className="hero-sub">
            Guitar • Drums • Composition • Production
          </p>
        </div>
      </section>

      {/* ELECTRIC DIVIDER */}
      <div className="electric-line" />

      {/* ABOUT */}
      <section>
        <p>
          Professional guitarist, drummer and audio producer with over 20 years of experience.
          Focused on precision, rhythmic control and complete musicianship.
        </p>
      </section>

      {/* SCHOOLS */}
      <section>
        <h2>Schools</h2>
        <p>
          Bayfield Primary, Auckland Normal Intermediate, Remuera Intermediate,
          Stonefields School, Newton Primary, Ponsonby Primary and more.
        </p>
      </section>

      {/* REVIEWS */}
      <section>
        <h2>Reviews</h2>
        <a
          href="https://share.google/0xNp2HxxKpiGiVsFt"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Google Reviews
        </a>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <h2>Book a Lesson</h2>
        <p>Limited availability. Enquire now.</p>
        <a href="mailto:jagsingh@hotmail.co.nz" className="btn">
          Contact
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="socials">
          <a href="https://www.instagram.com/jag666/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@jagmetal" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <small>© Jagwinder Singh</small>
      </footer>

    </div>
  );
}
import React, { useState, useEffect } from 'react';
import '../styles/Production.css'; // Add your CSS styles here

function Production() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/studio1.JPG', // Replace with your actual image paths
    '/images/studio2.JPG',
    '/images/studio3.JPG',
    '/images/studio4.jpg',
    '/images/studio5.JPG',
    '/images/studio6.JPG',
    '/images/studio7.JPG',
    '/images/studio8.JPG',
    '/images/studio9.JPG',
    '/images/studio10.JPG',
    '/images/studio11.JPG',
    '/images/studio12.JPG',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="production-container">
      <h1>Audio Production</h1>
      
      {/* About Section */}
      <div className="about">
        <h2>About Me</h2>
        <p>
          With a diploma in audio engineering and certification as a Pro Tools user, I bring extensive experience in recording live bands and instruments. My passion lies in capturing the unique sound of punk, hardcore, metal, progressive music, and more, using high-quality recording equipment and techniques.
        </p>
      </div>

      {/* Experience Section */}
      <div className="experience">
        <h2>Experience & Philosophy</h2>
        <p>
          I specialize in producing, recording, mixing, and mastering, aiming to enhance each band's distinct sound. My approach is grounded in a deep appreciation for music, from recording foundational tracks to refining the final mix.
        </p>
      </div>

      {/* Skills Section */}
      <h2>Skills & Expertise</h2>
        <ul>
        <li>Recording Techniques: Expertise in capturing live bands and instruments with high fidelity.</li>
          <li>Mixing & Mastering: Proficient in blending tracks and finalizing audio for various formats.</li>
          <li>Pro Tools Certified: Advanced proficiency in industry-standard DAW for recording and editing.</li>
          <li>High-Quality Equipment: Access to professional-grade recording gear, amplifiers, and instruments.</li>
          <li>Sound Design: Crafting unique soundscapes tailored to each project's needs.</li>
          <li>Production: Guiding bands through the full production process from pre-production to mastering.</li>
        </ul>

      {/* Slideshow Section */}
      <div className="slideshow">
        <h2>Gallery</h2>
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Contact</h2>
        <p>Email: jagsingh@hotmail.co.nz</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Production;

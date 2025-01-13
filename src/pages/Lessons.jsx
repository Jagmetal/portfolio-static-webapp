import React, { useState, useEffect } from 'react';
import '../styles/Lessons.css'; // Add your CSS styles here

function Lessons() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/live1.JPG', // Replace with your actual image paths
    '/images/live2.JPG',
    '/images/live3.JPG',
    '/images/live4.JPG',
    '/images/live5.JPG',
    '/images/live6.JPG',
    '/images/live7.JPG',
    '/images/live10.JPG',
    '/images/live11.JPG',
    '/images/live12.JPG',
    '/images/live13.JPG',
    '/images/live14.JPG',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="lessons-container">
      <h1>Guitar Lessons</h1>

      {/* Description Section */}
      <div className="description">
        <h2>About Me</h2>
        <p>
          With over 20 years of experience as a professional guitarist, I offer comprehensive and personalized guitar 
          lessons designed to help students of all levels unlock their full musical potential. My journey spans over 
          15 years of live performances across a multitude of genres, including punk, hardcore, metal, progressive 
          and technical music. This diverse background enriches my teaching, providing students with a deep 
          understanding of various styles and the technical skills required to master them.
        </p>

        <h2>My Approach</h2>
        <p>
          I believe in a tailored approach to learning, where each lesson is customized to align with the student’s 
          individual goals and aspirations. Whether you aim to master advanced guitar techniques, explore music theory, 
          or develop your improvisation skills, I provide a supportive and dynamic learning environment that fosters 
          growth and creativity.
        </p>

        <h2>Skills & Expertise</h2>
        <ul>
          <li>Advanced Guitar Techniques: Proficiency in alternate, economy, and sweep picking, fingerstyle, and advanced rhythm training.</li>
          <li>Music Theory & Composition: Comprehensive knowledge of scales, modes, and music theory, integrated with contextual teaching.</li>
          <li>Curriculum Development: Personalized lesson planning that adapts to the unique needs and progress of each student.</li>
          <li>Performance Coaching: Guidance on live performance, stage presence, and overcoming performance anxiety.</li>
          <li>Studio Recording Proficiency: Hands-on experience with studio recording, audio engineering, and music production.</li>
          <li>Instrument Maintenance & Setup: Expertise in guitar maintenance, setup, and understanding of gear and effects.</li>
          <li>Drumming Instruction: Over 7 years of drumming experience, offering insights into drum rudiments, rhythm training, and music transcription.</li>
        </ul>

        <h2>Why Choose My Lessons?</h2>
        <p>
          My lessons are not just about mastering the instrument but about cultivating a lifelong passion for music. 
          I draw from a vast repertoire of genres and techniques, ensuring that each student gains a well-rounded musical 
          education. My goal is to inspire and empower students to explore their creativity, develop their unique style, 
          and achieve their musical dreams.
        </p>
      </div>

      {/* Photo Slideshow Section */}
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

      {/* Pricing Section */}
      <div className="pricing">
        <h2>Pricing</h2>
        <ul>
          <li>30 minutes: $40</li>
          <li>45 minutes: $60</li>
          <li>60 minutes: $80</li>
        </ul>
      </div>

      {/* Contact Details Section */}
      <div className="contact">
        <h2>Contact</h2>
        <p>Email: jagsingh@hotmail.co.nz</p>
        <p>Phone: (021) 068-7491</p>
      </div>
    </div>
  );
}

export default Lessons;

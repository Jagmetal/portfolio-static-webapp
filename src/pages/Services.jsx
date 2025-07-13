import React from 'react';
import '../styles/Services.css'; // Ensure this stylesheet exists

function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>

      {/* Guitar Lessons */}
      <section className="service-section">
        <h2>Guitar Lessons</h2>
        <p>
          Over 20 years of professional experience teaching guitar across all levels. Lessons cover:
        </p>
        <ul>
          <li>Beginner to advanced technique</li>
          <li>Alternate, sweep, and economy picking</li>
          <li>Music theory & composition</li>
          <li>Improvisation & songwriting</li>
          <li>Performance coaching</li>
          <li>Drumming instruction available</li>
        </ul>
      </section>

      {/* Audio Production */}
      <section className="service-section">
        <h2>Audio Production</h2>
        <p>
          Diploma-certified audio engineer with extensive experience in recording and producing. Services include:
        </p>
        <ul>
          <li>Multi-track recording & live session engineering</li>
          <li>Mixing & Mastering for digital and physical release</li>
          <li>Sound design, editing, and post-production</li>
          <li>Full production support from demo to final master</li>
          <li>Pro Tools Certified</li>
        </ul>
      </section>

      {/* Composition Services */}
      <section className="service-section">
        <h2>Composition</h2>
        <p>
          Need original music? I offer custom composition services tailored to your project:
        </p>
        <ul>
          <li>Film & video game scores</li>
          <li>Intro/outro tracks for podcasts or YouTube</li>
          <li>Metal, progressive, and cinematic styles</li>
          <li>Guitar, Bass and drum arrangements</li>
        </ul>
      </section>

      {/* Session Work */}
      <section className="service-section">
        <h2>Session Work</h2>
        <p>
          Available as a session guitarist and drummer for:
        </p>
        <ul>
          <li>Studio recordings (remote or in-person)</li>
          <li>Live performances and tours</li>
          <li>Collaborations on original material</li>
        </ul>
        <p>
          I bring a precise, creative, and professional edge to your music—whether you need heavy riffs, solos, rhythmic grooves, or percussive backbone.
        </p>
      </section>

      {/* Contact */}
      <section className="service-section contact-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jagsingh@hotmail.co.nz">jagsingh@hotmail.co.nz</a></p>
        <p>Phone: (021) 068-7491</p>
      </section>
    </div>
  );
}

export default Services;

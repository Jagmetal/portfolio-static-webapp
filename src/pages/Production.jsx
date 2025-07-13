import React, { useState, useEffect } from 'react';
import '../styles/Production.css'; // Your CSS styles

function Production() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const basePath = import.meta.env.BASE_URL;

  const slides = [
    `${basePath}images/studio1.JPG`,
    `${basePath}images/studio2.JPG`,
    `${basePath}images/studio3.JPG`,
    `${basePath}images/studio4.jpg`,
    `${basePath}images/studio5.JPG`,
    `${basePath}images/studio6.JPG`,
    `${basePath}images/studio7.JPG`,
    `${basePath}images/studio8.JPG`,
    `${basePath}images/studio9.JPG`,
    `${basePath}images/studio10.JPG`,
    `${basePath}images/studio11.JPG`,
    `${basePath}images/studio12.JPG`,
    `${basePath}images/studio13.jpg`,
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
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

      {/* Portfolio Section */}
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="embed-container">

          {/* Bandcamp: Dredge */}
          <iframe
            style={{ border: 0, width: '350px', height: '470px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=493094345/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Dredge - In Lunacy... The Savage Dream"
          >
            <a href="https://dredgenzhc.bandcamp.com/album/in-lunacy-the-savage-dream">
              In Lunacy... The Savage Dream by Dredge
            </a>
          </iframe>
          
          {/* Bandcamp: Setentia */}
          <iframe
            style={{ border: 0, width: '350px', height: '470px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1589746223/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Setentia - Darkness Transcend"
          >
            <a href="https://blood-music.bandcamp.com/album/darkness-transcend">
              Darkness Transcend by Setentia
            </a>
          </iframe>

          {/* Bandcamp: Slavedriver */}
          <iframe
            style={{ border: 0, width: '350px', height: '470px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2924395443/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Slavedriver - Marauders of the Wasteland"
          >
            <a href="https://slavedriver666.bandcamp.com/album/marauders-of-the-wasteland">
              Marauders Of The Wasteland by Slavedriver
            </a>
          </iframe>

          {/* SoundCloud 1 */}
          <iframe
            width="350"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1928566670&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Jagmetal - Jagmetal"
          ></iframe>

          {/* SoundCloud 2 */}
          <iframe
            width="350"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2085873462&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Jagmetal - Suhr Reactive IR Test"
          ></iframe>
        </div>

        <div className="soundcloud-credit">
          <small>
            <a href="https://soundcloud.com/jagmetals" target="_blank" rel="noopener noreferrer">Jagmetal666</a> ·
            <a href="https://soundcloud.com/jagmetals/suhr-reactive-ir-test" target="_blank" rel="noopener noreferrer"> Suhr Reactive IR Test</a>
          </small>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Contact</h2>
        <p>Email: jagsingh@hotmail.co.nz</p>
        <p>Phone: (021) 068-7491</p>
      </div>
    </div>
  );
}

export default Production;


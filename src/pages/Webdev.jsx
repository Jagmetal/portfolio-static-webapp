import React from "react";

function Webdev() {
  return (
    <div>
      <h1>Web Development</h1>
      <div className="project-container">
        <div className="project">
          <h2>Project 1: Music Lesson Booking App</h2>
          <iframe 
            src="https://jagmetal.github.io/FBDfrontend-vite-deploy/" 
            width="100%" 
            height="400" 
            title="Project 1 Preview"
          />
          <a href="https://jagmetal.github.io/FBDfrontend-vite-deploy/" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
        </div>
        <div className="project">
          <h2>Project 2: Trucking logistics Company</h2>
          <iframe 
            src="https://blackhorselogisticsgroup.com/" 
            width="100%" 
            height="400" 
            title="Project 2 Preview"
          />
          <a href="https://blackhorselogisticsgroup.com/" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Webdev;

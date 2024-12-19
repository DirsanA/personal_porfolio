import React, { useState, useEffect } from "react";
import "./Programs.css";

// Programs component accepts an array of languages as a prop
function Programs({ languages }) {
  // State to manage the hover effect for the progress bar
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="Programs">
      {languages.map((lang, index) => (
        <div
          key={index}
          className="Program"
          onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
          onMouseLeave={() => setHoveredIndex(null)} // Reset when hover leaves
        >
          <img src={lang.image} alt={lang.name} />
          <div className="caption-overlay">
            <p>{lang.name}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: hoveredIndex === index ? `${lang.progress}%` : "0%", // Animate to the progress value
                  backgroundColor: "#4caf50", // Green color for progress
                }}
              ></div>
            </div>
            <div className="progress-text">{lang.progress}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Programs;

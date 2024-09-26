import React from 'react';
import "./Project.css";
import useScrollPopUp from 'component/Animation/useScrollPopUp';

const Project = ({ project }) => {
  const { ref: projectRef, animate: projectAnimate } = useScrollPopUp();

  // Function to handle the click event
  const handleClick = () => {
    // Navigate to the project's URL
    window.location.href = project.url; // Assuming project.url contains the target URL
  };

  return (
      <div 
        ref={projectRef} 
        className={`project-container-scroll ${projectAnimate ? "pop-class" : ""}`} 
        onClick={handleClick} // Attach the click event here
      >
        <div className="project">
          <div className="project-name">{project.name}</div>
          <p className="project-desc">{project.description}</p>
        </div>
      </div>
  );
};

export default Project;
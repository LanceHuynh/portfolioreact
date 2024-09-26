import React from 'react';
import "./Project.css";
import useScrollPopUp from 'component/Animation/useScrollPopUp';

const Project = ({ project }) => {

  const { ref: projectRef, animate: projectAnimate } = useScrollPopUp();

  return (
      <div ref={projectRef} className={`project-container-scroll ${projectAnimate ? "pop-class" : ""}`}>
        <div class="project">
          <div class="project-name">{project.name}</div>
          <p class="project-desc">{project.description}</p>
        </div>
      </div>
  );
};

export default Project;
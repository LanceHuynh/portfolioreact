import React from 'react';
import "./Project-container.css";
import Project from './Project/Project';
import useScrollPopUp from 'component/Animation/useScrollPopUp';

const ProjectContainer = ({ title, projectlist = [], extra = null }) => {

    const { ref: titleRef, animate: titleAnimate } = useScrollPopUp();
    const { ref: extraRef, animate: extraAnimate } = useScrollPopUp();

  return (
    <div className={'project-container'}>
      <div ref={titleRef} className={`project-container-title ${titleAnimate ? "pop-class" : ""}`}>{title}</div>
      <hr className={"project-container-linebreak"}></hr>
      <div ref={extraRef} className={`project-container-title ${extraAnimate ? "pop-class" : ""}`}>{extra}</div>
      <div className={"project-list"}>
        {projectlist.map((project, index) => (
          // Rendering Project component for each project in the projectlist
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
// MainTextBlock.js
import React from 'react';
import AboutMeShowcase from './AboutMeShowcase/AboutMeShowcase';
import './MainTextBlock.css';

const MainTextBlock = () => {
    const showcasesData = [
        {
          iconClass: "fa-pencil-alt",
          showcaseBigTitle: "Designer",
          bigDescription: "Simplistic, clean, unified design structure",
          experience : "Mobile/PC Layout, Adobe Photoshop"
        },
        {
          iconClass: "fa-code",
          showcaseBigTitle: "Front-end Developer",
          bigDescription: "Bringing ideas to life",
          experience : "ReactJS, Spring"
        },
        {
          iconClass: "fa-server",
          showcaseBigTitle: "Back-end Developer",
          bigDescription: "All your operational needs",
          experience: "NodeJS, Express, MongoDB"
        },
      ];
  return (
    <div className="main-text-block">
      {showcasesData.map((data, index) => (
        <AboutMeShowcase key={index} {...data} />
      ))}
    </div>
  );
};

export default MainTextBlock;
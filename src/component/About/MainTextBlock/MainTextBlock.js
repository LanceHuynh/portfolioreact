// MainTextBlock.js
import React, {useEffect} from 'react';
import { useScroll, animated } from '@react-spring/web';
import AboutMeShowcase from './AboutMeShowcase/AboutMeShowcase';
import './MainTextBlock.css';

const MainTextBlock = () => {

    //paralax main-text-block
    const { scrollY } = useScroll()

    useEffect(() => {
    }, []);
    //
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
    <animated.div className="main-text-block" style={{
      transform: scrollY.to((value) => `translateY(${0-0.3*value}px)`),
    }}>
      {showcasesData.map((data, index) => (
        <AboutMeShowcase key={index} {...data} />
      ))}
    </animated.div>
  );
};

export default MainTextBlock;
// AboutMeShowcase.js
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutMeShowcase.css';
import ShowcaseContent from './ShowcaseContent/ShowcaseContent';
import { useScrollContext } from 'component/Context/ScrollContext';
import { animated } from "react-spring";

const AboutMeShowcase = ({ iconClass, showcaseBigTitle, bigDescription, experience}) => {

  const [Iconanimate, setIconAnimate] = useState(false);
  const [bigTitleanimate, setBigTitleAnimate] = useState(false);
  const [bigDescriptionanimate, setBigDescriptionAnimate] = useState(false);

  const iconRef = useRef(null);
  const bigTitleRef = useRef(null);
  const bigDescriptionRef = useRef(null);
  
  const { scrollY } = useScrollContext();


  useEffect(() => {
    // Your logic goes here
    const boundingBoxicon = iconRef.current.getBoundingClientRect();
    boundingBoxicon.top < (scrollY + 0.8*window.innerHeight) ? setIconAnimate(true) : setIconAnimate(false);

    const boundingBoxbigTitle = bigTitleRef.current.getBoundingClientRect();
    boundingBoxbigTitle.top < (scrollY + 0.8*window.innerHeight) ? setBigTitleAnimate(true): setBigTitleAnimate(false);

    const boundingBoxbigDescription = bigDescriptionRef.current.getBoundingClientRect();
    boundingBoxbigDescription.top < (scrollY + 0.8*window.innerHeight) ? setBigDescriptionAnimate(true) : setBigDescriptionAnimate(false);


    // This code will run after the component mounts
    // If you want to perform any cleanup when the component unmounts, return a cleanup function
    return () => {
      // Cleanup logic goes here (optional)
    };
  }, [scrollY])


  return (
    <div className="about-me-showcase">
      <animated.div ref={iconRef} className={Iconanimate ? "icon-outer-wrapper pop-class": "icon-outer-wrapper" } >
      <FontAwesomeIcon icon={iconClass}/>
      </animated.div>
      <animated.h1 ref={bigTitleRef} className={bigTitleanimate && "pop-class"} >{showcaseBigTitle}</animated.h1>
      <animated.p ref={bigDescriptionRef} className={bigDescriptionanimate ? "bigDescription pop-class" : "bigDescription"} >{bigDescription}</animated.p>
      <ShowcaseContent title="Have experience with" description={experience} />
    </div>
  );
};

export default AboutMeShowcase;

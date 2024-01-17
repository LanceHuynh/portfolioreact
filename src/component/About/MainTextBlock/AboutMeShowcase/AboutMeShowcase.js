// AboutMeShowcase.js
import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutMeShowcase.css';
import ShowcaseContent from './ShowcaseContent/ShowcaseContent';
import { animated } from 'react-spring';
import useScrollPopUp from 'component/Animation/useScrollPopUp'; // Adjust the path if necessary

const AboutMeShowcase = ({ iconClass, showcaseBigTitle, bigDescription, experience }) => {
  const { ref: iconRef, animate: Iconanimate } = useScrollPopUp();
  const { ref: bigTitleRef, animate: bigTitleAnimate } = useScrollPopUp();
  const { ref: bigDescriptionRef, animate: bigDescriptionAnimate } = useScrollPopUp();

  useEffect(() => {
    
  }, []);


    

  return (
    <div className="about-me-showcase">
      <animated.div ref={iconRef} className={Iconanimate ? "icon-outer-wrapper pop-class" : "icon-outer-wrapper"}>
        <FontAwesomeIcon icon={iconClass} />
      </animated.div>
      <animated.h1 ref={bigTitleRef} className={bigTitleAnimate ? "pop-class" : ""}>{showcaseBigTitle}</animated.h1>
      <animated.p ref={bigDescriptionRef} className={bigDescriptionAnimate ? "bigDescription pop-class" : "bigDescription"}>{bigDescription}</animated.p>
      <ShowcaseContent title="Have experience with" description={experience} />
    </div>
  );
};

export default AboutMeShowcase;

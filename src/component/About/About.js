// About.js
import React  from 'react';
import {animated} from 'react-spring';
import LargeBlueBlock from './LargeBlueBlock/LargeBlueBlock';
import MainTextBlock from './MainTextBlock/MainTextBlock';
import Priorities from './Priorities/Priorities';
import BottomWords from './BottomWords/BottomWords';
import useFadeIn from '../Animation/fadeIn'; // Import the useFadeIn hook
import './About.css';

const About = () => {

  

  const fadeInProps = useFadeIn(); // Use the hook here

  return (
    <animated.div className="About" style={fadeInProps}>
      <LargeBlueBlock />
      <MainTextBlock />
      <Priorities/>
      <BottomWords/>
    </animated.div>
  );
};

export default About;
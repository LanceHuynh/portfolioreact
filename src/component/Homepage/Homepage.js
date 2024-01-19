// Homepage.js

import React, {useRef , useEffect} from 'react';
import {animated} from 'react-spring';
import useFadeIn from '../Animation/fadeIn'; // Import the useFadeIn hook
import './Homepage.css';
import Hero from './Hero/Hero';
import CrudEmployee from './CrudEmployee/CrudEmployee';

const Homepage = () => {
  //reference to scroll to
  const toRef = useRef(null);
  //event handler to store scroll arrow button logic
  const scrollToElement = () => {
    const targetElement = document.getElementById('scrollTo');
  
      const elementPosition = targetElement.offsetTop - 70 ;
  
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
  };

  

  const fadeInProps = useFadeIn(); // Use the hook here

  return (
    <animated.div style={fadeInProps}>
      <Hero scrollToElement={scrollToElement}/>
      <CrudEmployee/>
    </animated.div>
  );
};

export default Homepage;
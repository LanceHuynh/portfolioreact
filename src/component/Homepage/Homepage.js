// Homepage.js

import React from 'react';
import {animated} from 'react-spring';
import useFadeIn from '../Animation/fadeIn'; // Import the useFadeIn hook
import './Homepage.css';
import Hero from './Hero/Hero';

const Homepage = () => {

  const fadeInProps = useFadeIn(); // Use the hook here

  return (
    <animated.div style={fadeInProps}>
      <Hero/>
    </animated.div>
  );
};

export default Homepage;
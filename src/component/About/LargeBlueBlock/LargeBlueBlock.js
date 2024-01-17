// LargeBlueBlock.js
import React from 'react';
import './LargeBlueBlock.css';
import {animated} from 'react-spring';
import useTopDownIn from 'component/Animation/topDownIn'; // Import the useScaleIn hook
import useLeftRightIn from 'component/Animation/leftRightIn'; // Import the useScaleIn hook

const LargeBlueBlock = () => {

  const topDownInProps = useTopDownIn();
  const leftRightInProps = useLeftRightIn();

  return (
    <div className="large-blue-block">
      <animated.h2 className="about-title" style={topDownInProps}>Hi, I am Lan</animated.h2>
      <animated.p className="about-title-extra-text" style={leftRightInProps}>
        I make <b>beautiful</b>, <b>functional</b> websites, with <b>fluid</b> interactions!
      </animated.p>
    </div>
  );
};

export default LargeBlueBlock;
// Homepage.js

import React, {useRef , useEffect} from 'react';
import {animated} from 'react-spring';
import useFadeIn from '../Animation/fadeIn'; // Import the useFadeIn hook
import './Homepage.css';
import Hero from './Hero/Hero';
import ProjectContainer from 'component/template/Project-container/Project-container';

const Homepage = () => {
  // projects data
  const projectListPersonal = [
    { name: "Yellow Lotus", description: "*Not an actual company" },
    { name: "Finnish News", description: "It's outdated" },
    { name: "Shopview with Sorting", description: "Type something in the search bar!" },
  ];

  const projectListIntern= [
    { name: "Rules", description: "Who even read these?" },
    { name: "Submit form", description: "Maybe you could have won" },
    { name: "Judges infomation", description: "Know thy enemies!" },
  ];

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

      <div id ="scrollTo"></div>

      <ProjectContainer title="Personal Work" projectlist={projectListPersonal} />
      <ProjectContainer title="Intern Work" projectlist={projectListIntern} extra="Asanzo logo making context" />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    </animated.div>
  );
};

export default Homepage;
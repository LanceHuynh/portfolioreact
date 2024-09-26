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
    { name: "Yellow Lotus", description: "*Not an actual company", url: "https://lancehuynh.github.io/yellow-lotus/" },
    { name: "Finnish News", description: "It's outdated", url: "https://lancehuynh.github.io/Finnishnews/" },
    { name: "Shopview with Sorting", description: "Type something in the search bar!", url: "https://lancehuynh.github.io/SearchFilter/" },
  ];

  const projectListIntern= [
    { name: "Rules", description: "Who even read these?", url: "https://lancehuynh.github.io/Asanzo-thele/" },
    { name: "Submit form", description: "Maybe you could have won", url: "https://lancehuynh.github.io/Asanzo-guibai/" },
    { name: "Judges infomation", description: "Know thy enemies!", url: "https://lancehuynh.github.io/Asanzo-giamkhao/" },
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
      <ProjectContainer title="Intern Work" projectlist={projectListIntern} extra="Asanzo logo making contest" />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </animated.div>
  );
};

export default Homepage;
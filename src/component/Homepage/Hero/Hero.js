// Hero.js

import './Hero.css';
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = ({scrollToElement}) => {
 
  //Hero and children parallax animation
  const [heroSpring, setHero] = useSpring(() => ({ translateY: 0, opacity: 1, config: { mass: 0, tension: 1, friction: 0 } }));
  //Hero and children parallax animation

  useEffect(() => {
    
    // updating animation object with scroll value
    
    const handleScroll = () => {
      
      const opacity = 1 - window.scrollY / 800;
      
      setHero({ translateY: window.scrollY, opacity });
    
    };
    
    // updating animation object with scroll value




    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHero,heroSpring]);


  return (
    <animated.div className="hero" style={{ transform: heroSpring.translateY.to((value) => `translateY(${value/1.35}px)`) }}>
      <br />
      <animated.div className='hero-para-container' style={{ transform: heroSpring.translateY.to((value) => `translateY(${-value/7}px)`), opacity: heroSpring.opacity }}>
        <p className="hero-para">
          I'm Lan Huynh, aspiring Fullstack developer</p>
        <p className="small-text">This website was created with ReactJS and animated by Spring</p>
        <br />
        <p className="small-text">Scroll down to check out my project!</p>
        <div className='arrow-down-container' onClick={scrollToElement}>
        <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Hero;
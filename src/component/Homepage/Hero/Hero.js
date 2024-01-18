// Hero.js

import './Hero.css';
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

  const [heroSpring, setHero] = useSpring(() => ({ translateY: 0, config: { mass: 0, tension: 200, friction: 0 } }));

  useEffect(() => {
    const handleScroll = () => {
      setHero({ translateY: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHero,heroSpring]);


  return (
    <animated.div className="hero" style={{ transform: heroSpring.translateY.to((value) => `translateY(${value}px)`) }}>
      <br />
      <div className='hero-para-container' >
        <p className="hero-para">I'm Lan Huynh, aspiring Fullstack developer</p>
        <p className="small-text">This website was created with ReactJS and animated by Spring</p>
        <br />
        <p className="small-text">Scroll down to check out my project!</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </animated.div>
  );
};

export default Hero;
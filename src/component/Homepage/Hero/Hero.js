// Hero.js

import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

  return (
    <div className="hero">
      <br />
      <div className='hero-para-container'>
        <p className="hero-para">I'm Lan Huynh, aspiring Fullstack developer</p>
        <p className="small-text">This website was created with ReactJS and animated by Spring</p>
        <br />
        <p className="small-text">Scroll down to check out my project!</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default Hero;

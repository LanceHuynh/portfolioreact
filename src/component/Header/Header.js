// Header.js
import { useRef, useState, useEffect } from 'react';
import './Header.css';
import Navigation from './Navigation/Navigation'; // Import Navigation component
import SocialIcons from './SocialIcons/SocialIcons'; // Import SocialIcons component

const Header = () => {

  const [moved, setMoved] = useState(false);
  const HeaderRef = useRef(null);

  
  useEffect(() => {
    const handleScroll = () => {
      setMoved(window.scrollY <= 30)
    };

    // Initial check when the component mounts
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={HeaderRef} className={moved ? "top-header" : "top-header scroll" }>
      {/* Navigation Component */}
      <Navigation />
      
      {/* Name Component */}
      <div className="name">
        <a href="/">Lan Huynh</a>
      </div>
      
      {/* Social Icons Component */}
      <SocialIcons />
    </header>
  );
};

export default Header;
// Header.js
import React from 'react';
import './Header.css';
import Navigation from './Navigation/Navigation'; // Import Navigation component
import SocialIcons from './SocialIcons/SocialIcons'; // Import SocialIcons component

const Header = () => {
  return (
    <header className="top-header">
      {/* Navigation Component */}
      <Navigation />
      
      {/* Name Component */}
      <div className="name">
        <a href="">Lan Huynh</a>
      </div>
      
      {/* Social Icons Component */}
      <SocialIcons />
    </header>
  );
};

export default Header;
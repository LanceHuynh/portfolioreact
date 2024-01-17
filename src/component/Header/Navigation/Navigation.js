// Navigation.js
import React from 'react';
import NavItem from './NavItem/NavItem';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="top-nav">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </nav>
  );
};

export default Navigation;
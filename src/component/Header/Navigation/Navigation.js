// Navigation.js
import React from 'react';
import NavItem from './NavItem/NavItem';
import './Navigation.css';


const Navigation = () => {


  return (
    <nav className="top-nav">
      <NavItem ele="A">Home</NavItem>
      <NavItem ele="B">About</NavItem>
      <NavItem ele="C">Contact</NavItem>
    </nav>
  );
};

export default Navigation;
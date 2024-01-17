// NavItem.js
import React from 'react';
import './NavItem.css';

const NavItem = ({ href, children }) => {
  return (
    <a href={href} className="nav-items">
      {children}
    </a>
  );
};

export default NavItem;
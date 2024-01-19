// NavItem.js
import React from 'react';
import './NavItem.css';
import { useRouteContext } from 'component/Context/RouteContext';

const NavItem = ({ ele, children }) => {

  const {toggleElement} = useRouteContext(); 

  return (
    <a onClick={()=>{toggleElement(ele)}} className="nav-items">
      {children}
    </a>
  );
};

export default NavItem;
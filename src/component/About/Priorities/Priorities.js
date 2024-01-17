// Priorities.js
import React, { useEffect, useRef, useState } from 'react';
import { useScrollContext } from 'component/Context/ScrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Priorities.css'; // Assuming this is the CSS file for Priorities component

const PriorityItem = ({ iconClass, title, description }) => {
  return (
    <div className={`priority-item`}>
      <div className={`icon-container space-pls-min scroll-items`}>
        <FontAwesomeIcon icon={iconClass} />
      </div>
      <h3 className="icon-title">{title}</h3>
      <p className="icon-description">{description}</p>
    </div>
  );
};

const Priorities = () => {

  

  return (
    <div className="priorities">
      <h1 className="space-pls">My priorities</h1>
      <div className="priority-icons-container">
        <PriorityItem iconClass="fa-check" title="Coding convention" description="Adhere to standards" />
        <PriorityItem iconClass="fa-bolt" title="Optimization" description="Clean and optimized codes, for good performance and ease of maintenance." />
        <PriorityItem iconClass="fa-tablet-alt" title="Responsive" description="One solution, all devices" />
        <PriorityItem iconClass="fa-lock" title="Security" description="One of the most important factors" />
      </div>
    </div>
  );
};

export default Priorities;
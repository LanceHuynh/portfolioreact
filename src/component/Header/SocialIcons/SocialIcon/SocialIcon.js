// SocialIcon.js
import React from 'react';
import './SocialIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ href, icon }) => {
  return (
    <a href={href} className="icons">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;
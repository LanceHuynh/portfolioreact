// SocialIcon.js
import React from 'react';
import './SocialIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon }) => {
  return (
    <a className="icons">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;
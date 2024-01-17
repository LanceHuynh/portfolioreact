// ContactItems.js
import React from 'react';
import './ContactItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactItems = ({ iconName, title, description, additionalDescription }) => {
  const iconMap = {
    'fa-map-marker-alt': faMapMarkerAlt,
    'fa-envelope': faEnvelope,
    'fa-phone': faPhone,
    // Add more icons if needed
  };

  return (
    <div className="contact-items">
      <div className={`icon-container space-pls-min scroll-items popping big-font ${iconName}`}>
        <FontAwesomeIcon icon={iconMap[iconName]} />
      </div>
      <h3 className="space-pls-min">{title}</h3>
      <p>{description}</p>
      {additionalDescription && <p>{additionalDescription}</p>}
    </div>
  );
};

export default ContactItems;
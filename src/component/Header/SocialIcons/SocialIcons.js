// SocialIcons.js
import React from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import './SocialIcons.css'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icon-container">
      <SocialIcon href="" icon={faFacebookF} />
      <SocialIcon href="" icon={faTwitter} />
      <SocialIcon href="" icon={faLinkedinIn} />
    </div>
  );
};

export default SocialIcons;
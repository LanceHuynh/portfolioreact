import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import ContactItems from './ContactItems/ContactItems';
import useFadeIn from '../Animation/fadeIn'; // Import the useFadeIn hook
import useScaleIn from '../Animation/scaleIn'; // Import the useScaleIn hook
import './Contact.css';

const Contact = () => {

  const items = [
    { iconName: 'fa-map-marker-alt', title: 'Location', description: 'Ho Chi Minh, VietNam' },
    { iconName: 'fa-envelope', title: 'Email', description: 'lanhuynh.hoang1998', additionalDescription: '@gmail.com' },
    { iconName: 'fa-phone', title: 'Phone', description: '041-751-6282' },
  ];


  useEffect(() => {
    // Additional logic if needed
  }, []);

  const fadeInProps = useFadeIn(); // Use the hook here
  const scaleInProps = useScaleIn(items); // Use the hook here

  return (
    <animated.div className="contact" style={fadeInProps}>
      <h1 className="space-pls">Contact information</h1>
      <div className="contact-icons-container">
        {scaleInProps.map((style, index) => (
          <animated.div key={index} style={style}>
            <ContactItems {...items[index]} />
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default Contact;

// Priorities.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Priorities.css';
import useScrollPopUp from 'component/Animation/useScrollPopUp';

const PriorityItem = ({ iconClass, title, description }) => {
  const { ref: iconRef, animate: iconAnimate } = useScrollPopUp();
  const { ref: titleRef, animate: titleAnimate } = useScrollPopUp();
  const { ref: descRef, animate: descAnimate } = useScrollPopUp();

  return (
    <div className={`priority-item`}>
      <div ref={iconRef} className={`icon-container1 space-pls-min scroll-items ${iconAnimate ? "pop-class" : ""}`}>
        <FontAwesomeIcon icon={iconClass} />
      </div>
      <h3 ref={titleRef} className={`icon-title ${titleAnimate ? "pop-class" : ""}`}>{title}</h3>
      <p ref={descRef} className={`icon-description ${descAnimate ? "pop-class" : ""}`}>{description}</p>
    </div>
  );
};

const Priorities = () => {

  const { ref: paraRef, animate: paraAnimate } = useScrollPopUp();

  return (
    <div className="priorities">
      <div className="line-with-shadow">
      </div>
      <h1 ref={paraRef} className={paraAnimate ? "pop-class": null}>My priorities</h1>
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
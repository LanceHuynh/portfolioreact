// BottomWords.js
import React from 'react';
import useScrollPopUp from 'component/Animation/useScrollPopUp'; // Adjust the path if necessary
import './BottomWords.css'; // Assuming this is the CSS file for BottomWords component
import { useRouteContext } from 'component/Context/RouteContext';

const BottomWords = () => {
  const {toggleElement} = useRouteContext(); 
  const { ref: bottomRef, animate: bottomAnimate } = useScrollPopUp();
  return (
    <div ref={bottomRef} className={`bottom-words ${bottomAnimate ? "go" : ""}`}>
      <p>Want to know more? <a onClick={()=>{toggleElement('C')}}>Get in touch!</a></p>
    </div>
  );
};

export default BottomWords;
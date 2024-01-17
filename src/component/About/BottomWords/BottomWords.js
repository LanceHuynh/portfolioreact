// BottomWords.js
import React from 'react';
import useScrollPopUp from 'component/Animation/useScrollPopUp'; // Adjust the path if necessary
import './BottomWords.css'; // Assuming this is the CSS file for BottomWords component

const BottomWords = () => {

  const { ref: bottomRef, animate: bottomAnimate } = useScrollPopUp();
  return (
    <div ref={bottomRef} className={`bottom-words ${bottomAnimate ? "go" : ""}`}>
      <p>Interested? <a href="/contact">Get in touch!</a></p>
    </div>
  );
};

export default BottomWords;
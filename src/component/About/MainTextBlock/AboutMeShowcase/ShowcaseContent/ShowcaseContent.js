// ShowcaseContent.js
import React, { useEffect, useRef, useState } from 'react';
import { useScrollContext } from 'component/Context/ScrollContext';
import './ShowcaseContent.css';


const ShowcaseContent = ({ title, description }) => {

  const [titleanimate, setTitleAnimate] = useState(false);
  const [descanimate, setDescAnimate] = useState(false);

  const titleRef = useRef(null);
  const descRef = useRef(null);

  const { scrollY } = useScrollContext();

  useEffect(() => {
    // Your logic goes here
    const boundingBoxTitle = titleRef.current.getBoundingClientRect();
    boundingBoxTitle.top < (scrollY + 0.8*window.innerHeight) ? setTitleAnimate(true) : setTitleAnimate(false);

    const boundingBoxDesc = descRef.current.getBoundingClientRect();
    boundingBoxDesc.top < (scrollY + 0.8*window.innerHeight) ? setDescAnimate(true): setDescAnimate(false);

    // This code will run after the component mounts
    // If you want to perform any cleanup when the component unmounts, return a cleanup function
    return () => {
      // Cleanup logic goes here (optional)
    };
  }, [scrollY])

  return (
    <>
      <h2 ref={titleRef} className={titleanimate ? "showcase-title pop-class" : "showcase-title"}>{title}</h2>
      <p ref={descRef} className={descanimate ? "showcase-para pop-class": "showcase-para"}>{description}</p>
    </>
  );
};

export default ShowcaseContent;
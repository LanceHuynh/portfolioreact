// useScrollPopUp.js
import { useLayoutEffect, useRef, useState } from 'react';

const useScrollPopUp = (threshold = 0.8) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const boundingBox = ref.current.getBoundingClientRect();
      setAnimate((prevAnimate) => boundingBox.top < threshold * window.innerHeight);
    };

    // Initial check when the component mounts
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { ref, animate };
};

export default useScrollPopUp;

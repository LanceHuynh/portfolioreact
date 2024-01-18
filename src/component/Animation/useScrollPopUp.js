// useScrollPopUp.js
import { useLayoutEffect, useRef, useState } from 'react';
import { useScrollContext } from 'component/Context/ScrollContext';

const useScrollPopUp = (threshold = 0.8) => {
  const { scrollY } = useScrollContext();
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const boundingBox = ref.current.getBoundingClientRect();
      setAnimate((prevAnimate) => boundingBox.top < threshold * window.innerHeight);
    };

    // Initial check when the component mounts
    handleScroll();
  }, [scrollY]);

  return { ref, animate };
};

export default useScrollPopUp;

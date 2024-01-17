// useScrollPopUp.js
import { useLayoutEffect, useRef, useState } from 'react';

const useScrollPopUp = (threshold = 1) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
      const boundingBox= ref.current.getBoundingClientRect();
      setAnimate( boundingBox.top  <  threshold * window.innerHeight ? true : false);
      console.log([boundingBox.top,threshold * window.innerHeight], animate,ref.current.className)
  }, [window.scrollY]);

  return { ref, animate };
};

export default useScrollPopUp;

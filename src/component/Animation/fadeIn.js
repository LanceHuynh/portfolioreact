// fadeIn.js
import { useSpring } from 'react-spring';

const useFadeIn = () => {
  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });

  return fadeInProps;
};

export default useFadeIn;
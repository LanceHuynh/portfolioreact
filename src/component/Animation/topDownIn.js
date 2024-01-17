
import { useSpring } from 'react-spring';

const useTopDownIn = () => {
  const topDownInProps = useSpring({
    from: { top: '-8rem', opacity: 0 },
    to: { top: '0', opacity: 1 },
    config: { mass: 0.3, tension: 200, friction: 10 },
  });

  return topDownInProps;
};

export default useTopDownIn;
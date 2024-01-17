import { useSpring } from 'react-spring';

const useLeftRightIn = () => {
  const leftRightInProps = useSpring({
    from: { left: '-20rem', opacity: 0 },
    to: { left: '0', opacity: 1 },
    config: { mass: 0.3, tension: 200, friction: 10 },
  });

  return leftRightInProps;
};

export default useLeftRightIn;
// scaleIn.js
import { useSprings } from 'react-spring';

const useScaleIn = (items, boolean = true) => {
  return useSprings(
    items.length,
    items.map((item, index) => ({
      from: { transform: 'scale(0)' ,opacity: 0 },
      to: {transform: 'scale(1)', opacity: 1},
      config: { mass: 0.3, tension: 200, friction: 10 },
      delay: index * 70,
    }))
  );
};

export default useScaleIn;

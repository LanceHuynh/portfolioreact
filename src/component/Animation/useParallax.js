import { useEffect, useState } from 'react';

const useParallax = () => {
  const [parallaxStyle, setParallaxStyle] = useState({ transform: 'translateY(0rem)' });

  useEffect(() => {
    const handleScroll = () => {
      const translateY = window.scrollY / 300;
      setParallaxStyle({ transform: `translateY(${translateY}rem)` });
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return parallaxStyle;
};

export default useParallax;
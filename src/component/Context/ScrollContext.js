import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const value = { scrollY };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

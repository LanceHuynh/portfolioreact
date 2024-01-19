import React, { createContext, useContext, useState} from 'react';

const RouteContext = createContext();

export const useRouteContext = () => {
  return useContext(RouteContext);
};

export const RouteProvider = ({ children }) => {

  const [activeElement, setActiveElement] = useState('A');

  const toggleElement = (Element) => {
    // Toggle between A, B, and C
    setActiveElement(() => {
      return Element;
    });
  };

  const contextValue = {
    toggleElement,
    activeElement,
  };

  return (
    <RouteContext.Provider value={contextValue}>
      {children}
    </RouteContext.Provider>
  );
};

import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { ScrollProvider } from './component/Context/ScrollContext';
import { useRouteContext } from './component/Context/RouteContext';
import Homepage from 'component/Homepage/Homepage';
import About from 'component/About/About';
import Contact from 'component/Contact/Contact';

const App = () => {
  const { activeElement } = useRouteContext();
  return (
    <ScrollProvider>
      <Header/>
      {activeElement == 'A' && <Homepage/>}
      {activeElement == 'B' && <About/>}
      {activeElement == 'C' && <Contact/>}
    </ScrollProvider>
  );
};

export default App;
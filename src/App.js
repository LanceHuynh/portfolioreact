import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';
import Header from './component/Header/Header';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import { ScrollProvider } from './component/Context/ScrollContext';

const App = () => {
  return (
    <ScrollProvider>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ScrollProvider>
  );
};

export default App;
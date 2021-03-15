import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Nike from './components/Nike';
import Adidas from './components/Adidas';


export default function App() {
  return(
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/nike" element={<Nike />} />
          <Route exact path="/adidas" element={<Adidas />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}
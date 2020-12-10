import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Nike from './Components/Nike';


export default function App() {
  return(
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/nike" element={<Nike />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
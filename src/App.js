import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';

export default function App() {
  return(
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
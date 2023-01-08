import React from 'react';
import {Footer, About, SkinCare, Makeup, Foundation} from './containers';
import {Hair, BrandList, Navbar, Home} from './components';
import './App.css';
import { Routes, Route, Link} from "react-router-dom";


const App = () => {
  return (
    <div className = 'App'>
      <div className = "gradient__bg">
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
          <Route path='/BrandList' element={<BrandList />} />
          <Route path='/Makeup' element={<Makeup />} />
          <Route path='/Makeup/Foundation' element={<Foundation />} />       
          <Route path='/Skin' element={<SkinCare />} />
          <Route path='/Hair' element={<Hair />} />
          <Route path='/About' element={<About />} />
      </Routes>

      </div>
      
    </div>
  )
}

export default App
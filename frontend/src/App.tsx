import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Builder } from './pages/Builder';
import { parseXml } from './steps';
import  AboutUs  from './components/Home/AboutUs';
import { HeroSectionOne } from './components/Home/HeroSection.tsx';
import { SignIn, SignUp } from '@clerk/clerk-react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSectionOne />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import {React, useState, createContext, useRef} from 'react';
import Navbar from './components/Navbar.jsx';
import Preview from './components/Preview.jsx';
import Footer from './components/Footer.jsx';



function App() {
 
  return (
    <>
      <Navbar />
      <Preview />
      <Footer />
    </>
  )
}

export default App

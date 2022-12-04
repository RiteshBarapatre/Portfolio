import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
      
    </Routes>

    </>
  );
}

export default App;

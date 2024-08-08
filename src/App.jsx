import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './auth/SignUp';
import './App.css'
import SignIn from './auth/SignIn';
import Hero from './layouts/Hero';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
   
        <Route path="/hero/:userId" element={<Hero />} />
      
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

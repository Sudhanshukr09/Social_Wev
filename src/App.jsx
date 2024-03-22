import React, { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';   

const App = () => {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};    
export default App;

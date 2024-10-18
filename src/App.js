import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MemberRegistration from './components/Member-Registration';



function App() {
  return (
    <div>
      
      <Routes>2
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/member-registration" element={<MemberRegistration/>}/>

      </Routes>
    </div>
  );
}

export default App;

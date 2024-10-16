import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <div>
      
      <Routes>
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

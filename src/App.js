import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MemberRegistration from './components/Member-Registration';
import ResetPassword from './components/Resetpassword';
import SavingsDepositPage from './components/DepositForm';

function App() {
  return (
    <div>
      <Routes>
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/member-registration" element={<MemberRegistration/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/depositform" element={<SavingsDepositPage/>}/>

      </Routes>
    </div>
  );
}

export default App;

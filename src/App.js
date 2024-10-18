import React from 'react';
import { Routes, Route, Navigate,Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MemberRegistration from './components/Member-Registration';
import MembersPage from './components/MembersPage'
import Download_Monthly_Report from './components/Download_Monthly_Report'



function App() {
  return (
    <div>
      
      <Routes>2
        {/* Redirect root path to the login page */}
        <Route path="/login" element={<Navigate to="/login" />} />
        
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/member-registration" element={<MemberRegistration/>}/>
        <Route path="/Download_Monthly_Report" element={<Download_Monthly_Report/>}/>
        <Route path="/MembersPage" element={<MembersPage/>}/>

      </Routes>
    </div>
  );
}

export default App;

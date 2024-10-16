// src/Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    bachatgatCode: '',
    bachatgat: '',
    member: '',
    password: '',
  });

  // useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  const TestAPI = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    axios.get(url).then((response) => {
      console.log(response.data.name);
      // Navigate to home page after API call success
      navigate('/home'); // Redirects to the home page
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login functionality here
    console.log(formData);
    // After login, navigate to home
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Welcome to Bachatgat App!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bachatgatCode">Bachatgat Code:</label>
          <input
            type="text"
            id="bachatgatCode"
            name="bachatgatCode"
            value={formData.bachatgatCode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={TestAPI}>Login</button>
      </form>

      <div className="footer">
        <a href='/register' style={{ marginRight: '20px' }}>Sign Up</a>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;

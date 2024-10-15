// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    bachatgatCode: '',
    bachatgat: '',
    member: '',
    password: '',
  });
const TestAPI = () =>
{
  const url='https://jsonplaceholder.typicode.com/users/1'
  axios.get(url).then(
    response =>{
      console.log(response.data.name)
    } )
}
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login functionality here
    console.log(formData);    
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
          <label htmlFor="member">Member:</label>
          <select
            id="member"
            name="member"
            value={formData.member}
            onChange={handleChange}
          >
            <option value="">Select Member</option>
            <option value="Pavan Gore">Pavan Gore</option>
            {/* Add more members here */}
          </select>
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

        <button type="submit" onClick={() =>  TestAPI()
        }> Login</button>

      </form>

      <div className="footer">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;

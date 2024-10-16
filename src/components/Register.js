import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const [formData, setFormData] = useState({
    bachatgatName: '',
    startMonth: '',
    startYear: '',
    presidentTitle: 'Mr.',
    presidentName: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration functionality here
    console.log(formData);
  };

  return (
    <div className="registration-container">
      <h2>Bachatgat Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bachatgatName">Bachatgat Name:</label>
          <input
            type="text"
            id="bachatgatName"
            name="bachatgatName"
            value={formData.bachatgatName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startMonth">Start Month:</label>
          <select
            id="startMonth"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            {/* Add more months */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startYear">Start Year:</label>
          <select
            id="startYear"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more years */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="presidentName">Register By:</label>
          <input
            type="text"
            id="presidentName"
            name="presidentName"
            value={formData.presidentName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
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
          <label htmlFor="password">Set Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register Bachatgat</button>
      </form>

      <div className="footer">
      <a href='/login' style={{ marginRight: '20px' }}>Sign In</a>
        <p>By registering, you agree to our <a href="/terms">Privacy Policies and Terms & Conditions</a>.</p>
      </div>

      <div className="help-text">
        <h4>Start Month and Year Reference:</h4>
        <p>Please ensure that the start month and year match the records accurately.</p>
        <ul>
        <li>Step 1: Select the correct savings month based on the previous savings month.</li>
            <li>Step 2: Confirm all entries and check balance after setting.</li>
            <li>Step 3: Proceed to complete registration after confirming the savings month.</li>
 
        </ul>
      </div>
    </div>
  );
};

export default Registration;
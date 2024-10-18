import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    bachatgatCode: '',
    startMonth: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic here
  };

  return (
    <div className="container">
      <div className="title">Bachatgat Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details"> Bachatgat Code</span>
              <input
                type="text"
                name=" bachatgatCode"
                value={formData.bachatgatCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
            <span className="details">Start Month:</span>
          <select
            id="startMonth"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
            {/* Add more months */}
          </select>
        </div>

        <div className="input-box">
        <span className="details">Start Year:</span>
          <select
            id="startYear"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            {/* Add more years */}
          </select>
        </div>
    
        <div className="input-box">
        <span className="details">Mobile:</span>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
        <span className="details">Email:</span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
        <span className="details">Set Password:</span>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
          <div className="footer">
        <a href='/login' style={{ marginRight: '20px' }}>Sign In</a>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

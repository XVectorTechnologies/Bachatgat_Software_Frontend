import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MemberRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    entryMonth: '',
    entryYear: '',
    Role: '',
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
      <div className="title">Member Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box"  >
              <span className="details"> Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
              <span className="details">Role:</span>
              <select
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                
                <option value=""></option>
                <option value="president">President</option>
                <option value="vice-president">Vice President</option>
                <option value="treasure">Treasure</option>
                <option value="member">Member</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Entry Year:</span>
              <select
                id="EntryYear"
                name="EntryYear"
                value={formData.EntryYear}
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
              <span className="details">Entry Month:</span>
              <select
                id="EntryMonth"
                name="EntryMonth"
                value={formData.EntryMonth}
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
            <a href='/home' style={{ marginRight: '20px' }}>Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberRegistration;

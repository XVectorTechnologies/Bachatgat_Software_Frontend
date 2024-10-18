import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleLoginClick = () => {
        console.log("Email entered: ", email);
    };

    return (
        <div className="reset-container">
            <div className="reset-box">
                <div className="shapes">
                    <div className="cube"></div>
                    <div className="ring"></div>
                    <div className="pill"></div>
                </div>
                <h2>Reset Your Password</h2>
                <h3>
                    We received a request to reset your password. Don't worry, we are here to help you.
                </h3>
                <p className="ignore-text">
                    Didn't request a password reset?<br />
                    You can safely ignore this message.
                </p>

                {/* Email input field */}
                <div className="email-input">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Login button with added margin for spacing */}
                <div className="button">
                    <input
                        type="submit"
                        value="Login"
                        onClick={handleLoginClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

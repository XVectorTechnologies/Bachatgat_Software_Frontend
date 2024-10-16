import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SavingAccount = () => {
  const [viewInfo, setViewInfo] = useState(true);

  useEffect(() => {
    setViewInfo(true);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="container" style={headerContainerStyle}>
        <div className="header">
          <h2>X Vector</h2>
          <p>Savings Code: BG10631C</p>
          <p>Mr. Pavan Gore (President)</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="container">
        {/* Toggle Info and Fill Info */}
        <div className="card-custom" style={cardCustomStyle}>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-custom w-100" onClick={() => setViewInfo(true)} style={btnCustomStyle}>
                View Info
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-custom w-100" onClick={() => setViewInfo(false)} style={btnCustomStyle}>
                Fill Info
              </button>
            </div>
          </div>
        </div>

        {/* Display Info */}
        {viewInfo && (
          <div id="view-info" className="info-block" style={infoBlockStyle}>
            <p>Savings Month: September 2024</p>
            <div className="row">
              <div className="col-6">
                <p>Savings Balance</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Savings Interest</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Remaining Savings</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Total Loan Given</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Your Loan Taken</p>
                <p>₹0.00</p>
              </div>
            </div>

            {/* Links */}
            <div className="row">
              <div className="col-6">
                <a href="/download-monthly-report" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Download Monthly Report
                </a>
              </div>
              <div className="col-6">
                <a href="/government-schemes" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Government Schemes (25)
                </a>
              </div>
              <div className="col-6">
                <a href="/loan-taken" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Loan Taken ₹0.00 (0)
                </a>
              </div>
              <div className="col-6">
                <a href="/loan-installments" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Installments Remaining ₹0.00 (0)
                </a>
              </div>
              <div className="col-6">
                <a href="/monthly-other-expenses" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Monthly Other Expenses ₹0.00 (0)
                </a>
              </div>
              <div className="col-6">
                <a href="/monthly-other-income" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Monthly Other Income ₹0.00 (0)
                </a>
              </div>
              <div className="col-6">
                <a href="/loan-details" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Loan Repayment Details ₹0.00
                </a>
              </div>
              <div className="col-6">
                <a href="/total-loan-disbursed" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Total Loan Disbursed ₹0.00
                </a>
              </div>
              <div className="col-6">
                <a href="/rules" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Rules and Notifications
                </a>
              </div>
              <div className="col-6">
                <a href="/profile-settings" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Profile Settings
                </a>
              </div>
              <div className="col-6">
                <a href="/login" className="btn btn-custom w-100" style={btnCustomStyle}>
                  Log Out
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Fill Info */}
        {!viewInfo && (
          <div id="fill-info" className="info-block" style={infoBlockStyle}>
            {/* Additional fields for Fill Info */}
            <div className="row">
              <div className="col-6">
                <p>Savings Balance</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Loan Given</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Pending Savings</p>
                <p>(1)</p>
              </div>
              <div className="col-6">
                <p>Other Expenses</p>
                <p>₹0.00</p>
              </div>
              <div className="col-6">
                <p>Other Income</p>
                <p>₹0.00 (0)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const headerContainerStyle = {
  backgroundColor: '#005DA5',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
};

const cardCustomStyle = {
  backgroundColor: '#006699',
  color: 'white',
  margin: '10px',
  padding: '15px',
  textAlign: 'center',
  borderRadius: '10px',
};

const infoBlockStyle = {
  backgroundColor: '#00B894',
  color: 'white',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px',
};

const btnCustomStyle = {
  backgroundColor: '#007ACC',
  color: 'white',
  margin: '5px',
  textDecoration: 'none',
  display: 'block',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
};

// Media Queries for responsiveness
const mediaStyles = `
  @media (max-width: 768px) {
    .container {
      padding: 5px;
    }
    .col-6 {
      width: 100%;
      margin-bottom: 10px;
    }
    .btn {
      font-size: 14px;
    }
  }
`;

// Injecting media styles into the document head
const styleTag = document.createElement("style");
styleTag.innerHTML = mediaStyles;
document.head.appendChild(styleTag);

export default SavingAccount;

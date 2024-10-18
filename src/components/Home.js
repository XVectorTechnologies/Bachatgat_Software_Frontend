import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SavingsAccount = () => {
  const [viewInfoVisible, setViewInfoVisible] = useState(true);
  const navigate = useNavigate();

  const showViewInfo = () => {
    setViewInfoVisible(true);
  };

  const showFillInfo = () => {
    setViewInfoVisible(false);
  };

  return (
    <div className="container">
      {/* Header Section */}
   
        <div className="title">
          <h2>Loksewa</h2>
      </div>

      {/* Info Section */}
      <div className="container">
        <div className="card-custom">
          <div className="row">
            <div className="col-6">
              <button className="input-box" onClick={showViewInfo}>
                View Info
              </button>
            </div>
            <div className="col-6">
              <button className="input-box" onClick={showFillInfo}>
                Fill Info
              </button>
            </div>
          </div>
        </div>

        {viewInfoVisible && (
          <div className="input-box">
            <div className="row">
              <div className="col-6"><p>Savings Balance</p><p>₹10,050.00</p></div>
              <div className="col-6"><p>Loan Amount</p><p>₹0.00 (0)</p></div>
              <div className="col-6"><p>Pending Savings</p><p>(1)</p></div>
              <div className="col-6"><p>Loan Installments</p><p>(0)</p></div>
              <div className="col-6"><p>Other Expenses</p><p>₹0.00</p></div>
              <div className="col-6"><p>Other Income</p><p>₹0.00 (0)</p></div>
            </div>

            <div className="row">
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/monthly-report')}>Download Monthly Report</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/loan-taken')}>Loan Taken</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/loan-distribution')}>Monthly Loan Distribution</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/member')}>Member</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/savings-due')}>Savings Due</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/loan-installment')}>Loan Installment Due</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/other-income')}>Monthly Other Income</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/other-expenses')}>Monthly Other Expenses</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/profile-settings')}>Profile Settings</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/login')}>Log Out</button>
              </div>
            </div>
          </div>
        )}

        {!viewInfoVisible && (
          <div className="input-box">
            <div className="row">
              <div className="col-6"><p>Savings Balance</p><p>₹10,050.00</p></div>
              <div className="col-6"><p>Loan Amount</p><p>₹0.00 (0)</p></div>
              <div className="col-6"><p>Pending Savings</p><p>(1)</p></div>
              <div className="col-6"><p>Loan Installments</p><p>(0)</p></div>
              <div className="col-6"><p>Other Expenses</p><p>₹0.00</p></div>
              <div className="col-6"><p>Other Income</p><p>₹0.00 (0)</p></div>
            </div>

            <div className="row">
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/collect-savings')}>Collect Savings</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/collect-installment')}>Collect Loan Installment</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/other-income')}>Other Income</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/other-expenses')}>Other Expenses</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/member-registration')}>Member Registration</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/rules-notifications')}>Add Rules & Notifications</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/penalty-settings')}>Set Penalty & Savings</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/profile-settings')}>Profile Settings</button>
              </div>
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/login')}>Log Out</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsAccount;

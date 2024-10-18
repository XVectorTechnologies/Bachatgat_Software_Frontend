import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SavingsDepositForm = () => {
  const [memberName, setMemberName] = useState('');
  const [savings, setSavings] = useState(0);
  const [fine, setFine] = useState(0);

  const [memberNamePending, setMemberNamePending] = useState('');
  const [pendingSavings, setPendingSavings] = useState(0);
  const [pendingFine, setPendingFine] = useState(0);

  const depositedMembers = [
    { id: 1, name: 'Pavan Gore', savings: 5000, fine: 50 },
    // Additional deposited members can be added here
  ];

  const pendingMembers = [
    // Add pending members here if any
  ];

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    console.log({ memberName, savings, fine });
  };

  const handlePendingFineSubmit = (e) => {
    e.preventDefault();
    console.log({ memberNamePending, pendingSavings, pendingFine });
  };

  return (
    <div className="container my-4">

      {/* Instructions Section */}
      <div className="instructions my-3">
        <ul>
          <li>Deposit Amount: Please Set <span className="text-success">(Set)</span></li>
          <li>Fine: Please Set <span className="text-success">(Set)</span></li>
          <li>Deposit Date: Please Set <span className="text-success">(Set)</span></li>
        </ul>
      </div>

      {/* Month Header */}
      <div className="month-header text-center bg-success text-white p-2">
        Savings Month: October 2024
      </div>

      {/* Savings Form */}
      <div className="card my-4">
        <h5 className="card-title text-danger p-2">Deposit Savings for Members</h5>
        <form onSubmit={handleDepositSubmit}>
          <div className="row mb-3 px-3">
            <div className="col-md-6">
              <label htmlFor="memberName">Member:</label>
              <select
                className="form-select"
                id="memberName"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              >
                <option value="" disabled>Select Member Name</option>
                {/* Add dynamic options here */}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="savings">Savings:</label>
              <input
                type="number"
                className="form-control"
                id="savings"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="fine">Fine:</label>
              <input
                type="number"
                className="form-control"
                id="fine"
                value={fine}
                onChange={(e) => setFine(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">Submit Savings</button>
        </form>
      </div>

      {/* Pending Fine Form */}
      <div className="card my-4">
        <h5 className="card-title text-danger p-2">Mark as Pending for the Entire Month</h5>
        <form onSubmit={handlePendingFineSubmit}>
          <div className="row mb-3 px-3">
            <div className="col-md-6">
              <label htmlFor="memberNamePending">Member:</label>
              <select
                className="form-select"
                id="memberNamePending"
                value={memberNamePending}
                onChange={(e) => setMemberNamePending(e.target.value)}
              >
                <option value="" disabled>Select Member Name</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="pendingSavings">Savings:</label>
              <input
                type="number"
                className="form-control"
                id="pendingSavings"
                value={pendingSavings}
                onChange={(e) => setPendingSavings(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="pendingFine">Fine:</label>
              <input
                type="number"
                className="form-control"
                id="pendingFine"
                value={pendingFine}
                onChange={(e) => setPendingFine(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">Mark as Pending</button>
        </form>
      </div>

      {/* Deposited Members Table */}
      <div className="table-section">
        <h5 className="text-danger">Members Who Deposited Savings</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>Savings</th>
                <th>Fine</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {depositedMembers.length ? (
                depositedMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.name}</td>
                    <td>₹{member.savings}</td>
                    <td>₹{member.fine}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">✅</button>
                      <button className="btn btn-danger btn-sm">❌</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No members have deposited savings.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Month Pending Members Table */}
      <div className="table-section">
        <h5 className="text-danger">Members with Full Month Pending</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-warning">
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>Savings</th>
                <th>Fine</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingMembers.length ? (
                pendingMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.name}</td>
                    <td>₹{member.savings}</td>
                    <td>₹{member.fine}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">✅</button>
                      <button className="btn btn-danger btn-sm">❌</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No pending members.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* WhatsApp Section */}
      <div className="footer text-center my-4">
        <h5 className="text-danger">Send Info to Members via WhatsApp</h5>
        <button className="btn btn-success">
          <i className="bi bi-whatsapp"></i> WhatsApp Now
        </button>
      </div>
    </div>
  );
};

export default SavingsDepositForm;

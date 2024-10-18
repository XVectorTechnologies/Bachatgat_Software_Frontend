import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SavingsAccount = () => {
  const [viewInfoVisible, setViewInfoVisible] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const showViewInfo = () => {
    setViewInfoVisible(true);
  };

  const showFillInfo = () => {
    setViewInfoVisible(false);
  };

  // Function to fetch data (previously in useEffect)
  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data); // Store fetched data in state
        console.log(response.data); // Log the data (you can handle it differently if needed)
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
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
              {/* Info display code */}
              <div className="col-6">
                <p>Savings Balance</p>
                <p>₹10,050.00</p>
              </div>
              <div className="col-6">
                <p>Loan Amount</p>
                <p>₹0.00 (0)</p>
              </div>
              {/* More fields */}
            </div>

            <div className="row">
              {/* Buttons with actions */}
              <div className="col-6">
                <button className="input-box" onClick={() => navigate('/penalty-settings')}>
                  Set Penalty & Savings
                </button>
              </div>
              {/* Updated penalty-settings button to call fetchData */}
              <div className="col-6">
                <button className="input-box" onClick={fetchData}>
                  Fetch Data & Show in Console
                </button>
              </div>
              {/* More buttons */}
            </div>
          </div>
        )}

        {!viewInfoVisible && (
          <div className="input-box">
            {/* Fill Info display */}
            <div className="row">
              {/* Buttons and fields similar to view info */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavingsAccount;

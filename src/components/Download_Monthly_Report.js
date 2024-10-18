import React, { useState } from "react";
import "./MonthlyReport.css"; // Create this CSS file for styling

const MonthlyReport = () => { 
  const [selectedMonthYear, setSelectedMonthYear] = useState("2024-01");

  const handleMonthYearChange = (e) => {
    setSelectedMonthYear(e.target.value);
  };

  return (
    <div className="container">
      <div className="monthly-report">
        <header className="report-header">
          <button className="back-button">Monthly Report</button>
          <span className="report-date">18-10-2024</span>
        </header>

        <section className="month-selection">      
          <label>Saving Month:</label>
          <input
            type="month"
            value={selectedMonthYear}
            onChange={handleMonthYearChange}
          />

          <button className="info-button">Get Information</button>
        </section>

        <section className="report-summary">
          <h2>Group Finances: {new Date(selectedMonthYear).toLocaleString('default', { month: 'long' })} {selectedMonthYear.split('-')[0]}</h2>
          <table>
            <tbody>
              <tr>
                <td>a) Monthly Contribution:</td>
                {/* <td>₹5,000.00</td> */}
              </tr>
              <tr>
                <td>b) Loan Amount:</td>
                {/* <td>₹5,050.00</td> */}
              </tr>
            </tbody>
          </table>

          <table className="details-table">
            <thead>
              <tr>
                <th>Saving</th>
                <th>Loan Installment</th>
                <th>Interest</th>
                <th>Fine</th>
                <th>Other Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹5,000.00</td>
                <td>₹0.00</td>
                <td>₹0.00</td>
                <td>₹50.00</td>
                <td>₹0.00</td>
              </tr>
            </tbody>
          </table>

          <table className="summary-table">
            <tbody>
              <tr>
                <td>c) Total Deposit (a + b):</td>
                <td>₹10,050.00</td>
              </tr>
              <tr>
                <td>d) Interest on Loan(a + b):</td>
                <td>₹10,050</td>
              </tr>
            </tbody>
          </table>
          <button className="download-button">Download Monthly Report</button>
        </section>

        <section className="report-summary">
          <h2>Export Reports: {new Date(selectedMonthYear).toLocaleString('default', { month: 'long' })} {selectedMonthYear.split('-')[0]}</h2>
          <table>
            <tbody>
              <tr>
                <td>a) Loan Amount:</td>
                {/* <td>₹5,000.00</td> */}
              </tr>
              <tr>
                <td>b)Loan Disbursement Date:</td>
                {/* <td>₹5,050.00</td> */}
              </tr>
              <tr>
                <td>c)Repayment Status:</td>
                {/* <td>₹5,050.00</td> */}
              </tr>
            </tbody>
          </table>

          <table className="details-table">
            <thead>
              <tr>
                <th>Saving</th>
                <th>Loan Installment</th>
                <th>Interest</th>
                <th>Fine</th>
                <th>Other Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹5,000.00</td>
                <td>₹0.00</td>
                <td>₹0.00</td>
                <td>₹50.00</td>
                <td>₹0.00</td>
              </tr>
            </tbody>
          </table>

          <table className="summary-table">
            <tbody>
              {/* <tr>
                <td>d) Total Deposit (a + b):</td>
                <td>₹10,050.00</td>
              </tr> */}
            </tbody>
          </table>
          <button className="download-button">Download Monthly Report</button>
        </section>





        {/* Loans Section */}
        <section className="report-summary">
          <h2>Loans: {new Date(selectedMonthYear).toLocaleString('default', { month: 'long' })} {selectedMonthYear.split('-')[0]}</h2>
          <table>
            <tbody>
              <tr>
                <td>a) Loan Amount:</td>
                <td>₹5,000.00</td>
              </tr>
              <tr>
                <td>b)Loan Issue Date:</td>
                <td>₹5,050.00</td>
              </tr>
              {/* <tr>
                <td>b)Repayment Status:</td>
                <td>₹5,050.00</td>
              </tr> */}
            </tbody>
          </table>

          <table className="details-table">
            <thead>
              <tr>
                <th>Saving</th>
                <th>Loan Installment</th>
                <th>Interest</th>
                <th>Fine</th>
                <th>Other Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹5,000.00</td>
                <td>₹0.00</td>
                <td>₹0.00</td>
                <td>₹50.00</td>
                <td>₹0.00</td>
              </tr>
            </tbody>
          </table>

          <table className="summary-table">
            <tbody>
              {<tr>
                <td>b)Repayment Status:</td>
                <td>₹5,050.00</td>
              </tr> 
              /* <tr>
                <td>c) Total Deposit (a + b):</td>
                <td>₹10,050.00</td>
              </tr> */}
            </tbody>
          </table>
          <button className="download-button">Download Monthly Report</button>
        </section>

        {/* Member Contributions */}
        <section className="member-list">
          <h2>Member Contributions</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>Saving</th>
                <th>Fine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. Pavan Gore</td>
                <td>₹5,000.00</td>
                <td>₹50.00</td>
              </tr>
            </tbody>
          </table>
          <button className="download-button">Download Monthly Report</button>

        </section>

        {/* Expenses */}
        <section className="member-list">
          <h2>Expenses</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Expense Description</th>
                <th>Amount</th>
                <th>Date of Expense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. Pavan Gore</td>
                <td>₹5,000.00</td>
                <td>18-oct</td>
              </tr>
            </tbody>
          </table>
          <button className="download-button">Download Monthly Report</button>
        </section>

        <button className="whatsapp-button">WhatsApp Now</button>

        <footer className="report-footer">
          <button>Main Page</button>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>SHARE</button>
        </footer>
      </div>
    </div>
  );
};

export default MonthlyReport;

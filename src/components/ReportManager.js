// src/components/ReportManager.js
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./ReportManager.css";

Modal.setAppElement('#root'); // Accessibility for the modal

function ReportManager() {
  const [reports, setReports] = useState([
    { id: 1, name: "Sales Report" },
    { id: 2, name: "Inventory Report" },
    { id: 3, name: "Revenue Report" },
  ]);

  const [selectedReport, setSelectedReport] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Open the popup for a specific report
  const openModal = (report) => {
    setSelectedReport(report);
    setIsOpen(true);
  };

  // Close the popup
  const closeModal = () => {
    setIsOpen(false);
    setSelectedReport(null);
    setFromDate("");
    setToDate("");
  };

  // Download the report based on the selected date range
  const handleDownload = () => {
    const url = `https://api.example.com/download/${selectedReport.id}`; // Replace with actual API
    axios
      .get(url, {
        params: {
          fromDate: fromDate,
          toDate: toDate,
        },
        responseType: "blob", // Ensures the file is treated as a download
      })
      .then((response) => {
        // Create a link to download the file
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", `${selectedReport.name}.pdf`); // File format
        document.body.appendChild(link);
        link.click();
        closeModal();
      })
      .catch((error) => {
        console.error("Error downloading the report:", error);
      });
  };

  return (
    <div className="container">
      <div className="report-manager">
        <h1>Available Reports</h1>
        <ul>
          {reports.map((report) => (
            <li key={report.id} onClick={() => openModal(report)}>
              {report.name}
            </li>
          ))}
        </ul>

        {/* Modal Popup */}
        {selectedReport && (
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
            contentLabel="Report Download Modal"
          >
            <div className="modal-header">
              <h2>Download {selectedReport.name}</h2>
            </div>
            <form>
              <label>
                From Date:
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </label>
              <label>
                To Date:
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </label>
              <button type="button" onClick={handleDownload}>
                Download
              </button>
            </form>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ReportManager;

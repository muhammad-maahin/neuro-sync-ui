// ResultSummaryScreen.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import './ResultSummaryScreen.css';

function ResultSummaryScreen() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – Result Summary</title>
      </Helmet>

      <div className="result-summary-wrapper">
        <div className="result-card">
          <div className="success-icon"></div> {/* Green circle – tick icon later */}

          <h2 className="summary-title">Session Completed Successfully</h2>

          <div className="metrics-grid">
            <div className="metric-box">
              <p className="metric-label">Focus Level</p>
              <p className="metric-value">87%</p>
            </div>
            <div className="metric-box">
              <p className="metric-label">Session Duration</p>
              <p className="metric-value">12 min</p>
            </div>
            <div className="metric-box">
              <p className="metric-label">Signal Quality</p>
              <p className="metric-value">Good</p>
            </div>
          </div>

          <p className="summary-tip">
            Tip: Maintain consistent focus to improve long-term cognitive performance.
          </p>

          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ResultSummaryScreen;

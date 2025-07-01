// ContactScreen.js
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardLayout from '../components/DashboardLayout';
import './ContactScreen.css';

function ContactScreen() {
  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – Contact & About</title>
      </Helmet>

      <div className="contact-wrapper">
        <h2 className="screen-title">📬 About NeuroSync</h2>

        <div className="about-section">
          <p>
            NeuroSync is an advanced EEG-based monitoring and interaction platform designed to bridge neuroscience and user insights. 
            It enables researchers and developers to visualize, analyze, and manage brainwave data in real-time.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>Contact Information</h3>
            <p>📧 Email: support@neurosync.app</p>
            <p>📞 Phone: +92 300 0000000</p>
          </div>
          <div className="contact-box">
            <h3>Credits</h3>
            <p className="contact-footer">Built for Cognitive Signal Interaction Research – 2025</p>
            <p>🧑‍💻 Developed by: NeuroSync UI Team</p>
          </div>
        </div>

        <div className="feedback-section">
          <button className="feedback-btn">💬 Send Feedback</button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ContactScreen;

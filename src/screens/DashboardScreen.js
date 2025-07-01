// DashboardScreen.js
import React from 'react';
import { Helmet } from 'react-helmet';
import './DashboardScreen.css';
import DashboardLayout from '../components/DashboardLayout';
import DashboardCards from '../components/DashboardCards';

function DashboardScreen() {
    return (
        <>
            <Helmet>
                <title>NeuroSync – Dashboard</title>
            </Helmet>

            <DashboardLayout>
                {/* Top Bar */}
                <div className="top-bar">
                    <h2>Dashboard Overview</h2>
                </div>

                {/* Content Area */}
                <div className="content-area">
                    <DashboardCards />

                    {/* Footer */}
                    <div className="footer-status-bar">
                        <div className="status-item">🔋 Battery: 82%</div>
                        <div className="status-item">🔌 Device: Connected</div>
                        <div className="status-item">📡 Signal: Strong</div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}

export default DashboardScreen;


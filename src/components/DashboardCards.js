import React from "react";
import "./DashboardCards.css";

const DashboardCards = () => {
    return (
        <div className="dashboard-grid">

            {/* EEG Summary */}
            <div className="card">
                <p className="card-title">EEG Session Summary</p>
                <h3 className="card-highlight">4 Sessions Completed</h3>
            </div>

            {/* Active Brainwave */}
            <div className="card">
                <p className="card-title">Active Brainwave</p>
                <h3 className="card-highlight">Alpha - 12.5 Hz</h3>
            </div>

            {/* Recent Sessions */}
            <div className="card">
                <p className="card-title">Recent Sessions</p>
                <ul className="card-list">
                    <li>• Session 1 — 12 June — 18 min</li>
                    <li>• Session 2 — 13 June — 21 min</li>
                    <li>• Session 3 — 17 June — 15 min</li>
                </ul>
            </div>

            {/* Notifications */}
            <div className="card">
                <p className="card-title">Notifications</p>
                <ul className="notifications">
                    <li className="danger">⚠️ EEG cap not connected</li>
                    <li className="success">✅ Session completed</li>
                    <li className="info">🔋 Battery at 20%</li>
                </ul>
            </div>

        </div>
    );
};

export default DashboardCards;

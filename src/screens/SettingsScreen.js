// SettingsScreen.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Settings } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import './SettingsScreen.css';

function SettingsScreen() {
  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – Settings</title>
      </Helmet>

      <div className="settings-wrapper">
        <h2 className="screen-title"><Settings size={20} /> Settings</h2>

        <div className="settings-card">
          <div className="setting-section">
            <h3>App Preferences</h3>
            <label>
              <input type="checkbox" /> Enable Dark Mode
            </label>
            <label>
              <input type="checkbox" /> Show Notifications
            </label>
          </div>

          <div className="setting-section">
            <h3>Account Settings</h3>
            <label>
              Email: <input type="email" value="user@example.com" disabled />
            </label>
            <label>
              Change Password: <input type="password" placeholder="••••••••" />
            </label>
            <button className="save-btn">Save Settings</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SettingsScreen;

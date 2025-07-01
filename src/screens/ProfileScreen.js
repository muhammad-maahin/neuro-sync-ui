// ProfileScreen.js
import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import './ProfileScreen.css';
import { Helmet } from 'react-helmet';
import placeholder from '../assets/profile-placeholder.png';

function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Muhammad Maahin',
    email: 'maahin@example.com',
    role: 'NeuroResearch Analyst',
    password: '',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    alert('✅ Changes Saved (simulation)');
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – Profile</title>
      </Helmet>

      <div className="profile-wrapper">
        <h2 className="screen-title">👤 My Profile</h2>

        <div className="profile-card">
          {/* Left Column - Picture */}
          <div className="profile-left">
            <img src={placeholder} alt="Profile" className="profile-pic" />
            <button className="upload-btn">Change Photo</button>
          </div>

          {/* Right Column - Info */}
          <div className="profile-right">
            <div className="info-row">
              <label>Full Name</label>
              <input
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="info-row">
              <label>Email</label>
              <input
                name="email"
                value={profileData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="info-row">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••"
                value={profileData.password}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="info-row">
              <label>Role</label>
              <input
                name="role"
                value={profileData.role}
                disabled
              />
            </div>

            <div className="btn-row">
              <button className="edit-btn" onClick={handleEdit}>✏️ Edit</button>
              <button
                className="save-btn"
                onClick={handleSave}
                disabled={!isEditing}
              >
                💾 Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProfileScreen;

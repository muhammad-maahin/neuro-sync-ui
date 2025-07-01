// src/components/DashboardLayout.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/neurosync-logo.png';
import './DashboardLayout.css';

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: '📊 Dashboard', path: '/dashboard' },
    { label: '🧠 EEG Session', path: '/eeg-session' },
    { label: '📈 EEG Visualization', path: '/eeg-visualization' },
    { label: '📑 Session History', path: '/history' },
    { label: '👤 Profile', path: '/profile' },
    { label: '⚙️ Settings', path: '/settings' },
    { label: '📬 Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setSidebarOpen(false); // auto-close after click (on mobile)
  };

  return (
    <div className="dashboard-container">
      {/* ✅ Mobile Topbar */}
      {isMobile && (
        <div className="mobile-topbar">
          <img
            src={logo}
            alt="NeuroSync Logo"
            className="mobile-logo"
            onClick={() => navigate('/dashboard')}
          />
          <span className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ≡
          </span>
        </div>
      )}

      {/* ✅ Sidebar (desktop OR toggled mobile) */}
      {(sidebarOpen || !isMobile) && (
        <div className={`sidebar ${isMobile ? 'mobile-sidebar' : ''}`}>
          <img
            src={logo}
            alt="NeuroSync Logo"
            className="sidebar-logo"
            onClick={() => handleNavClick('/dashboard')}
          />

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <div
                key={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </div>
            ))}
          </nav>

          <div className="logout-wrapper">
            <div className="logout-btn" onClick={() => handleNavClick('/')}>
              <span className="logout-text">Logout</span>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Main Panel */}
      <div className="main-panel">{children}</div>
    </div>
  );
}

export default DashboardLayout;






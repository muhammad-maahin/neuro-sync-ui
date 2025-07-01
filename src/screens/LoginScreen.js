import React from 'react';
import { Helmet } from 'react-helmet';
import './LoginScreen.css';
import logo from '../assets/neurosync-logo-dark.png'; // Black text logo for white background
import headIcon from '../assets/head-icon.png'; // Left brain graphic
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>NeuroSync – Login</title>
      </Helmet>

      <div className="login-wrapper">
        {/* Left Visual Section */}
        <div className="login-left">
          <img src={headIcon} alt="Brain Visual" className="login-head" />
          <h1 className="tagline">
            Where <span>your mind</span> meets <span>insight</span>
          </h1>
        </div>

        {/* Right Login Form Section */}
        <div className="login-right">
          <div className="login-card">
            <img src={logo} alt="NeuroSync Logo" className="logo" />

            <h2 className="welcome-text">
              Welcome Back <span className="wave">👋</span>
            </h2>
            <p className="subtitle">Let’s get synced</p>

            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />

            <button className="login-button" onClick={() => navigate('/dashboard')}>
              Login
            </button>

            <p className="link-text">
              <a href="#">Forgot Password?</a>
            </p>
            <p className="link-text">
              Don’t have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;



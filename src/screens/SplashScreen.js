import React from 'react';
import { Helmet } from 'react-helmet';
import './SplashScreen.css';
import logo from '../assets/neurosync-logo-dark.png';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>NeuroSync – Welcome</title>
      </Helmet>
      <div className="splash-container">
        <img src={logo} alt="NeuroSync Logo" className="splash-logo" />
        <h1>Welcome to NeuroSync</h1>
        <p>Your Brain–Computer Interface Experience Starts Here</p>
        <button className="start-button" onClick={() => navigate('/login')}>
          Get Started
        </button>
      </div>
    </>
  );
}

export default SplashScreen;




//EEGSessionScreen.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Signal } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import EEGWaveform from '../components/EEGWaveform';
import './EEGSessionScreen.css';

function EEGSessionScreen() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [signalStrength, setSignalStrength] = useState(100);
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
        setSignalStrength((prev) => Math.max(0, prev - Math.floor(Math.random() * 3)));
        setBatteryLevel((prev) => Math.max(0, prev - 1));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleEnd = () => {
    setIsRunning(false);
    setTime(0);
    setSignalStrength(100);
    setBatteryLevel(100);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – EEG Monitoring</title>
      </Helmet>

      <div className="eeg-session-wrapper">
        {/* Title */}
        <h2 className="screen-title">
          <Signal size={20} /> EEG Monitoring
        </h2>

        {/* Timer & Controls */}
        <div className="eeg-control-box">
          <span className="timer">⏱️ {formatTime(time)}</span>
          <span className="status-dot">
            {isRunning ? '🟢 Live' : '⏸️ Paused'}
          </span>
          <button className="start-btn" onClick={handleStart}>▶️ Start</button>
          <button className="pause-btn" onClick={handlePause}>⏸️ Pause</button>
          <button className="end-btn" onClick={handleEnd}>⏹️ End</button>
        </div>

        {/* Graph */}
        <div className="eeg-graph-box">
          <p className="graph-label">🧠 Live Brainwave Feed</p>
          <div className="graph-placeholder">
            [Graph of EEG signal will appear here]
          </div>
        </div>

        {/* Footer: Device Info */}
        <div className="eeg-bottom-row">
          <div className="left-info">
            <p className="signal-label">📶 Signal Strength</p>
            <EEGWaveform />
            <p className="signal-percentage">Strength: {signalStrength}%</p>
            <p>Session ID: #NS-2025-016</p>
            <p>Participant: TestSubject001</p>
          </div>

          <div className="right-info">
            <p>🧢 Device: NeuroCap-X V2.1</p>
            <p>🔋 Battery: {batteryLevel}%</p>
            <p>📡 Connection: Connected</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EEGSessionScreen;







// EEGVisualizationScreen.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Activity } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import './EEGVisualizationScreen.css';

function EEGVisualizationScreen() {
  return (
    <DashboardLayout>
      <Helmet>
        <title>NeuroSync – EEG Visualization</title>
      </Helmet>

      <div className="eeg-visualization-wrapper">
        <h2 className="screen-title">
          <Activity size={20} /> EEG Visualization
        </h2>

        <div className="visualization-box">
          {/* Channel label on top right */}
          <div className="channel-display">Channel: Fp1</div>

          {/* Graph Label */}
          <p className="graph-label">🧠 EEG Waveform Output</p>

          {/* Placeholder for graph */}
          <div className="visualization-placeholder">
            [Visualization will render here]
          </div>

          {/* Control Buttons */}
          <div className="visualization-controls">
            <button className="visualization-btn start">▶️ Start</button>
            <button className="visualization-btn pause">⏸️ Pause</button>
            <button className="visualization-btn export">📤 Export</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EEGVisualizationScreen;


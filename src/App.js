import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SessionHistoryScreen from './screens/SessionHistoryScreen';
import EEGSessionScreen from './screens/EEGSessionScreen';
import ResultSummaryScreen from './screens/ResultSummaryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import EEGVisualizationScreen from './screens/EEGVisualizationScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/history" element={<SessionHistoryScreen />} />
        <Route path="/eeg-session" element={<EEGSessionScreen />} />
        <Route path="/summary" element={<ResultSummaryScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/eeg-visualization" element={<EEGVisualizationScreen />} />
        <Route path="/contact" element={<ContactScreen />} />

      </Routes>
    </Router>
  );
}

export default App;









import React from 'react';
import './Settings.css';
import { BrowserRouter as Router} from 'react-router-dom';
import SettingsNavbar from '../settingsNavbar/SettingsNavbar';
import SettingsContainer from '../settingsContainer/SettingsContainer';

function Settings() {
  return (
    <div className="settings">
      <Router>
        <SettingsNavbar />
        <SettingsContainer />
      </Router>
    </div>
  );
}

export default Settings;

import React from 'react';
import './styles.css';
import { BrowserRouter as Router} from 'react-router-dom';
import SettingsNavbar from '../../components/SettingsNavbar';
import SettingsContainer from '../SettingsContainer';

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

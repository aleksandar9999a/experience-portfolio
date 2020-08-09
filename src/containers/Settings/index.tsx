/**
 * External dependencies.
 */
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

/**
 * Internal dependencies.
 */
import SettingsNavbar from '../../components/SettingsNavbar';
import SettingsContainer from '../SettingsContainer';

import './styles.css';

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

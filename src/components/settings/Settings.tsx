import React, { useState } from 'react';
import './Settings.css';
import MainInformationSettings from './MainInformationSettings';
import ProjectsSettings from './ProjectsSettings';
import SkillsSettings from './SkillsSettings';
import AboutSettings from './AboutSettings';
import SettingsOptions from '../../types/SettingsOptions.types';


function Settings() {
  const [menu, setMenu] = useState<JSX.Element>(<MainInformationSettings />);

  function handleMenuChange(type: any) {
    const types: SettingsOptions = {
      MainInformationSettings: <MainInformationSettings />,
      ProjectsSettings: <ProjectsSettings />,
      SkillsSettings: <SkillsSettings />,
      AboutSettings: <AboutSettings />
    };
    if (types.hasOwnProperty(type)) {
      setMenu(types[type]);
    }
  }

  return (
    <div className="settings">
      <div className="settings-tabs-wrapper">
        <ul className="settings-tabs">
          <li className="settings-tab">
            <button
              className="settings-tab-button"
              onClick={handleMenuChange.bind(Settings, 'MainInformationSettings')}
              >
              Main Informations
              </button>
          </li>
          <li className="settings-tab">
            <button
              className="settings-tab-button"
              onClick={handleMenuChange.bind(Settings, 'ProjectsSettings')}
              >
              Projects
              </button>
          </li>
          <li className="settings-tab">
            <button
              className="settings-tab-button"
              onClick={handleMenuChange.bind(Settings, 'SkillsSettings')}
              >
              Skills
              </button>
          </li>
          <li className="settings-tab">
            <button
              className="settings-tab-button"
              onClick={handleMenuChange.bind(Settings, 'AboutSettings')}
              >
              About
              </button>
          </li>
        </ul>
      </div>
      {menu}
    </div>
  );
}

export default Settings;

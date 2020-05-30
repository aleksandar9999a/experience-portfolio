import React, { useState } from 'react';
import './Settings.css';
import MainInfoSettings from '../mainInfoSettings/MainInfoSettings';
import ProjectsSettings from '../projectsSettings/ProjectsSettings';
import SkillsSettings from '../skillsSettings/SkillsSettings';
import AboutSettings from '../aboutSettings/AboutSettings';
import SettingsOptions from '../../types/SettingsOptions.types';

const DefaultPage = () => <MainInfoSettings />

function Settings() {
  const [menu, setMenu] = useState<JSX.Element>(<DefaultPage />);

  function handleMenuChange(type: any) {
    const types: SettingsOptions = {
      MainInfoSettings: <MainInfoSettings />,
      ProjectsSettings: <ProjectsSettings />,
      SkillsSettings: <SkillsSettings />,
      AboutSettings: <AboutSettings />
    };
    if (types.hasOwnProperty(type)) {
      setMenu(types[type]);
    }
  }

  const handleMainInfoSettings = () => handleMenuChange('MainInfoSettings');
  const handleProjectsSettings = () => handleMenuChange('ProjectsSettings');
  const handleSkillsSettings = () => handleMenuChange('SkillsSettings');
  const handleAboutSettings = () => handleMenuChange('AboutSettings');

  return (
    <div className="settings">
      <div className="settings-tabs-wrapper">
        <ul className="settings-tabs">
          <li className="settings-tab">
            <button className="settings-tab-button" onClick={handleMainInfoSettings} >
              Main Info
            </button>
          </li>
          <li className="settings-tab">
            <button className="settings-tab-button" onClick={handleProjectsSettings} >
              Projects
            </button>
          </li>
          <li className="settings-tab">
            <button className="settings-tab-button" onClick={handleSkillsSettings} >
              Skills
            </button>
          </li>
          <li className="settings-tab">
            <button className="settings-tab-button" onClick={handleAboutSettings} >
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

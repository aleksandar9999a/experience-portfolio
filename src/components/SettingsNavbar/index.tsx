import React from 'react';
import './styles.css';
import SettingsTab from '../SettingsTab';
import tabsConfig from '../../configs/settingsTabs';


function SettingsNavbar() {
    return (
        <div className="settings-tabs-wrapper">
            {tabsConfig.map((tab, i) => {
                return <SettingsTab key={i} {...tab} />
            })}
        </div>
    );
}

export default SettingsNavbar;

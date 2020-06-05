import React from 'react';
import './styles.css';
import SettingsTab from '../SettingsTab';
import tabsConfig from '../../configs/settingsTabs';


function SettingsNavbar() {
    const listOfTabs = tabsConfig.map(({ name, route }, i) => <SettingsTab key={i} name={name} route={route} />)

    return (
        <div className="settings-tabs-wrapper">
            <ul className="settings-tabs">
                {listOfTabs}
            </ul>
        </div>
    );
}

export default SettingsNavbar;

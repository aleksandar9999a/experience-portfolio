import React from 'react';
import './SettingsNavbar.css';
import SettingsTab from '../settingsTab/SettingsTab';

let tabsConfig: { name: string, route: string }[] = [
    { name: 'Main Info', route: '/settings/' },
    { name: 'Projects', route: '/settings/projects' },
    { name: 'Skills', route: '/settings/skills' },
    { name: 'About', route: '/settings/about' }
]

const listOfTabs = tabsConfig.map(({ name, route }, i) => <SettingsTab key={i} name={name} route={route}/>)

function SettingsNavbar() {
    return (
        <div className="settings-tabs-wrapper">
            <ul className="settings-tabs">
                {listOfTabs}
            </ul>
        </div>
    );
}

export default SettingsNavbar;

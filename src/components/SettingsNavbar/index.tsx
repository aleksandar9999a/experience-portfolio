/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import SettingsTab from '../SettingsTab';
import tabsConfig from '../../configs/settingsTabs';

import './styles.css';


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

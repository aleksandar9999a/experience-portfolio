/**
 * External dependencies.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import ISettingsTab from '../../interfaces/ISettingsTab';

import './styles.css';

function SettingsTab({ name, route }: ISettingsTab) {
    return (
        <Link className="link settings-tab-button" to={route}>
            <span className="settings-tab-text">{name}</span>
        </Link>
    );
}

export default SettingsTab;

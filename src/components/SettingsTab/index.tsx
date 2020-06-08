import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import ISettingsTab from '../../interfaces/ISettingsTab';

function SettingsTab({ name, route }: ISettingsTab) {
    return (
        <Link className="link settings-tab-button" to={route}>
            <span className="settings-tab-text">{name}</span>
        </Link>
    );
}

export default SettingsTab;

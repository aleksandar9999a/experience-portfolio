import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function SettingsTab(props: { name: string, route: string }) {
    return (
        <li className="settings-tab">
            <Link className="link settings-tab-button" to={props.route}>
                <span className="settings-tab-text">{props.name}</span>
            </Link>
        </li>
    );
}

export default SettingsTab;

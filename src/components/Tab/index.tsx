/**
 * External dependencies.
 */
import React from 'react';
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import ITab from '../../interfaces/ITab';

import './styles.css';

function Tab({ name, route, Icon }: ITab) {
    return (
        <li className="tab">
            <Link className="link" to={route} >
                <span className="route-name">{name}</span>
                <div className="route-icon"><Icon size={25} /></div>
            </Link>
        </li>
    );
}

export default Tab;

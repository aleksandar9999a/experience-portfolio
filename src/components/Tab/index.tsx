import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import ITab from '../../interfaces/ITab';

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

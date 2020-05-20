import React from 'react';
import './Tab.css';
import { Link } from "react-router-dom";

function Tab(props: any) {
    const { data } = props;
    return (
        <li className="tab">
            <Link className="link" to={data.route} >
                <span className="route-name">{data.name}</span>
                <div className="route-icon"><data.icon size={25} /></div>
            </Link>
        </li>
    );
}

export default Tab;

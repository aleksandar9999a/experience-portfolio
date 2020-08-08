import React, { useState, useEffect } from 'react';
import './styles.css';
import ITab from '../../interfaces/ITab';
import Tab from '../Tab';
import { auth } from '../../services/db-auth';
import tabsConfig from '../../configs/navbar';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Navbar() {
    const [tabs, setTabs] = useState<ITab[]>([]);

    useEffect(() => {
        const userdata = auth.subscribe(user => {
            if (!!user) {
                setTabs(tabsConfig);
            } else {
                setTabs(tabsConfig.filter(tab => !tab.auth));
            }
        });

        return () => {
            userdata.unsubscribe();
        }
    }, [])

    return (
        <div className="navbar">
            <Link to="/" className="custom-tab">
                <Logo width="70px" height="60px" />
            </Link>
            <ul className="tabs">
                {tabs.map(tab => {
                    return <Tab {...tab} key={tab.id} />
                })}
            </ul>
        </div>
    );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import './styles.css';
import ITab from '../../interfaces/ITab';
import Tab from '../Tab';
import { auth } from '../../services/db-auth';
import tabsConfig from '../../configs/navbar';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const authTabs = ['Settings', 'Log Out'];

    function generateAuthTabs() {
        return tabsConfig.map((tab: ITab, i: number) => {
            return <Tab name={tab.name} route={tab.route} Icon={tab.Icon} key={i} />
        })
    }

    function generateUnauthTabs() {
        return tabsConfig.map((tab: ITab, i: number) => {
            return ! authTabs.includes(tab.name)
                ? <Tab name={tab.name} route={tab.route} Icon={tab.Icon} key={i} />
                : null
        })
    }

    useEffect(() => {
        const userdata = auth.subscribe(user => {
            setIsAuth(!!user)
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
                { 
                    isAuth 
                        ? generateAuthTabs()
                        : generateUnauthTabs()
                }
            </ul>
        </div>
    );
}

export default Navbar;

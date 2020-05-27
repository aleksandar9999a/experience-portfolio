import React, { useState, useEffect } from 'react';
import './Navbar.css';
import TabI from '../../interfaces/Tab';
import * as Icons from 'react-bootstrap-icons';
import Tab from '../tab/Tab';
import { auth } from '../../services/db';


function Navbar() {
    const [tabs, setTabs] = useState<JSX.Element[]>();
    
    function loadTabList(tabsConfig: TabI[]) {
        const generateTab = (tab: TabI, i: number) => <Tab data={tab} key={i}/>;
        const list = tabsConfig.map(generateTab);
        setTabs(list);
    }

    useEffect(() => {
        let tabsConfig: TabI[] = [
            { name: 'Projects', route: '/projects', icon: Icons.ColumnsGap },
            { name: 'Skills', route: '/skills', icon: Icons.CodeSlash },
            { name: 'Home', route: '/', icon: Icons.House },
            { name: 'About', route: '/about', icon: Icons.Person },
            { name: 'Contacts', route: '/contacts', icon: Icons.ChatDots },
        ]
    
        const userdata = auth.subscribe(user => {
            if (user) {
                const secretTabs = [
                    { name: 'Settings', route: '/setting', icon: Icons.Gear },
                    { name: 'Log Out', route: '/logout', icon: Icons.ArrowBarRight }
                ]
                let newTabsConfig = tabsConfig.concat(secretTabs);
                loadTabList(newTabsConfig);
            } else {
                loadTabList(tabsConfig);
            }
        });

        return () => {
            userdata.unsubscribe();
        }
    }, [])


    return (
        <div className="navbar">
            <ul className="tabs">{tabs}</ul>
        </div>
    );
}

export default Navbar;

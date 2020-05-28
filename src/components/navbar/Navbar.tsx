import React, { useState, useEffect } from 'react';
import './Navbar.css';
import TabI from '../../interfaces/Tab';
import * as Icons from 'react-bootstrap-icons';
import Tab from '../tab/Tab';
import { auth } from '../../services/db';


function Navbar() {
    const [tabs, setTabs] = useState<JSX.Element[]>();

    function loadTabList(tabsConfig: TabI[]) {
        const generateTab = (tab: TabI, i: number) => <Tab data={tab} key={i} />;
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
            { name: 'Settings', route: '/settings', icon: Icons.Gear },
            { name: 'Log Out', route: '/logout', icon: Icons.ArrowBarRight }
        ]

        const userdata = auth.subscribe(user => {
            let filterFn;

            if (user) {
                filterFn = (tab: TabI) => tab.name !== 'Contacts';
            } else {
                filterFn = (tab: TabI) => tab.name !== 'Settings' && tab.name !== 'Log Out';
            }
            const newTabsConfig = tabsConfig.filter(filterFn);
            loadTabList(newTabsConfig);
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

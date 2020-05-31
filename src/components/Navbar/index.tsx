import React, { useState, useEffect } from 'react';
import './styles.css';
import ITab from '../../interfaces/ITab';
import * as Icons from 'react-bootstrap-icons';
import Tab from '../Tab';
import { auth } from '../../services/db-auth';

function Navbar() {
    const [tabs, setTabs] = useState<JSX.Element[]>();

    function loadTabList(tabsConfig: ITab[]) {
        const generateTab = (tab: ITab, i: number) => <Tab name={tab.name} route={tab.route} Icon={tab.Icon} key={i} />;
        const list = tabsConfig.map(generateTab);
        setTabs(list);
    }

    useEffect(() => {
        let tabsConfig: ITab[] = [
            { name: 'Projects', route: '/projects', Icon: Icons.ColumnsGap },
            { name: 'Skills', route: '/skills', Icon: Icons.CodeSlash },
            { name: 'Home', route: '/', Icon: Icons.House },
            { name: 'About', route: '/about', Icon: Icons.Person },
            { name: 'Contacts', route: '/contacts', Icon: Icons.ChatDots },
            { name: 'Settings', route: '/settings', Icon: Icons.Gear },
            { name: 'Log Out', route: '/logout', Icon: Icons.ArrowBarRight }
        ]

        const userdata = auth.subscribe(user => {
            let filterFn;

            if (user) {
                filterFn = (tab: ITab) => tab.name !== 'Contacts';
            } else {
                filterFn = (tab: ITab) => tab.name !== 'Settings' && tab.name !== 'Log Out';
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

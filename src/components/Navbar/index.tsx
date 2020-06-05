import React, { useState, useEffect } from 'react';
import './styles.css';
import ITab from '../../interfaces/ITab';
import Tab from '../Tab';
import { auth } from '../../services/db-auth';
import tabsConfig from '../../configs/navbar';

function Navbar() {
    const [tabs, setTabs] = useState<JSX.Element[]>();

    function loadTabList(tabsConfig: ITab[]) {
        const generateTab = (tab: ITab, i: number) => <Tab name={tab.name} route={tab.route} Icon={tab.Icon} key={i} />;
        const list = tabsConfig.map(generateTab);
        setTabs(list);
    }

    function filterTabs(user: any) {
        return !!user ? (tab: ITab) => tab.name !== 'Contacts' : (tab: ITab) => tab.name !== 'Settings' && tab.name !== 'Log Out';
    }

    useEffect(() => {
        const userdata = auth.subscribe(user => {
            const filterFn = filterTabs(user);
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

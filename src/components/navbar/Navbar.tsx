import React from 'react';
import './Navbar.css';
import TabI from '../../interfaces/Tab';
import * as Icons from 'react-bootstrap-icons';
import Tab from '../tab/Tab';

const tabs: TabI[] = [
    { name: 'Projects', route: '/projects', icon: Icons.ColumnsGap },
    { name: 'Skills', route: '/skills', icon: Icons.CodeSlash },
    { name: 'Home', route: '/', icon: Icons.House },
    { name: 'About', route: '/about', icon: Icons.Person },
    { name: 'Contacts', route: '/contacts', icon: Icons.ChatDots },
]

const generateTab = (tab: TabI, i: number) => <Tab data={tab} key={i}/>;
const list = tabs.map(generateTab);

function Navbar() {
    return (
        <div className="navbar">
            <ul className="tabs">{list}</ul>
        </div>
    );
}

export default Navbar;

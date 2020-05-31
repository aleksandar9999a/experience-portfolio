import React from 'react';
import { Switch, Route } from "react-router-dom";
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contacts from '../contacts/Contacts';
import About from '../about/About';
import Login from '../login/Login';
import Settings from '../settings/Settings';
import Logout from '../logout/Logout';
import Home from '../home/Home';

const links = [
    { path: '/projects', Component: Projects },
    { path: '/skills', Component: Skills },
    { path: '/contacts', Component: Contacts },
    { path: '/about', Component: About },
    { path: '/login', Component: Login },
    { path: '/settings', Component: Settings },
    { path: '/logout', Component: Logout },
    { path: '/', Component: Home },
]

const listOfRoutes = links.map(({ path, Component }, i) => <Route path={path} key={i}><Component /></Route>);

function Container() {
    return (
        <Switch>
            {listOfRoutes}
        </Switch>
    );
}

export default Container;

import React from 'react';
import { Switch, Route } from "react-router-dom";
import Projects from '../../pages/projects/Projects';
import Skills from '../../pages/skills/Skills';
import Contacts from '../../pages/contacts/Contacts';
import About from '../../pages/about/About';
import Login from '../../pages/login/Login';
import Settings from '../settings/Settings';
import Logout from '../../pages/logout/Logout';
import Home from '../../pages/home/Home';

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

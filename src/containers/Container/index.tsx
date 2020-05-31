import React from 'react';
import { Switch, Route } from "react-router-dom";
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import Login from '../../pages/Login';
import Settings from '../Settings';
import Logout from '../../pages/Logout';
import Home from '../../pages/Home';

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

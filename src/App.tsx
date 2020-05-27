import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Home from './components/home/Home';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import CustomConstellation from './components/customConstellation/CustomConstellation';
import Login from './components/login/Login';

const links = [
  { path: '/projects', Component: Projects },
  { path: '/skills', Component: Skills },
  { path: '/contacts', Component: Contacts},
  { path: '/about', Component: About },
  { path: '/login', Component: Login },
  { path: '/', Component: Home },
]

const listOfRoutes = links.map(({ path, Component}, i) => <Route path={path} key={i}><Component /></Route>);

function App() {
  return (
    <div className="app">
      <CustomConstellation />
      <div className="overlay">
        <Router>
          <Navbar />
          <Switch>
            {listOfRoutes}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

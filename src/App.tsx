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

const styles = {
  height: window.innerHeight,
  backgroundColor: '#1d1d1d'
}

function App() {
  return (
    <div style={styles}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

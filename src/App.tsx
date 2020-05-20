import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {
  height: window.innerHeight,
  backgroundColor: '#1d1d1d'
}

function App() {
  return (
    <div style={styles}>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

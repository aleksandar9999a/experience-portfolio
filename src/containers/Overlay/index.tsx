import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Container from '../Container';

function Overlay() {
  return (
      <div className="overlay">
        <Router>
          <Navbar />
          <Container />
        </Router>
      </div>
  );
}

export default Overlay;

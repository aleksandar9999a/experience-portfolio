import React from 'react';
import './Overlay.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Container from '../container/Container';

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

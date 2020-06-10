import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Container from '../Container';
import Footer from '../../components/Footer';

function Overlay() {
  return (
    <div className="overlay">
      <Router>
        <Navbar />
        <Container />
        <Footer />
      </Router>
    </div>
  );
}

export default Overlay;

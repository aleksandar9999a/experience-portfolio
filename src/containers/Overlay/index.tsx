/**
 * External dependencies.
 */
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Internal dependencies.
 */
import Navbar from '../../components/Navbar';
import Container from '../Container';
import Footer from '../../components/Footer';

import './styles.css';


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

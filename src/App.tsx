/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Constellation from './components/Constellation';
import Overlay from './containers/Overlay';

import './App.css';

function App() {
  return (
    <div className="app">
      <Constellation />
      <Overlay />
    </div>
  );
}

export default App;

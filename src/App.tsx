import React from 'react';
import './App.css';
import Constellation from './components/Constellation';
import Overlay from './containers/Overlay';

function App() {
  return (
    <div className="app">
      <Constellation />
      <Overlay />
    </div>
  );
}

export default App;

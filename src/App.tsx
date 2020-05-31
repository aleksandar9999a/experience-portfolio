import React from 'react';
import './App.css';
import CustomConstellation from './components/customConstellation/CustomConstellation';
import Overlay from './containers/overlay/Overlay';

function App() {
  return (
    <div className="app">
      <CustomConstellation />
      <Overlay />
    </div>
  );
}

export default App;

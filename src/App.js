import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Ribbon from './components/ribbon'
import Stage from './components/stage'
import Kickplate from './components/kickplate'
import './App.css';

function App() {
  return (
    <>
      <Ribbon />
      <Stage/>  
      <Kickplate/>
    </>
  );
}

export default App;

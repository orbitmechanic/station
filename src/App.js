import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron}from 'react-bootstrap';

import Ribbon from './components/ribbon'
import Stage from './components/stage'
import './App.css';



function App() {
  return (
    <>
      <Ribbon />
      <Stage/>
      <Jumbotron id='baseboard' fluid>
        <p>orbitmechanic@protonmail.com</p>
      </Jumbotron>
    </>
  );
}

export default App;

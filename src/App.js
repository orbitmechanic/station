import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Jumbotron}from 'react-bootstrap';

import Ribbon from './components/ribbon'
import './App.css';



function App() {
  return (
    <>
      <Ribbon />

      <Container id='backplane' fluid>
        <Container className='OutputScreen' id='Screen1'>One</Container>
        <Container className='OutputScreen' id='Screen2'>Two</Container>
        <Button className='ScreenControl' variant='primary'     id='Button1'>1</Button>
        <Button className='ScreenControl' variant='secondary'   id='Button2'>2</Button>
        <Button className='ScreenControl' variant='info'        id='Button3'>3</Button>
        <Button className='ScreenControl' variant='success'     id='Button4'>4</Button>
      </Container>

      <Jumbotron id='baseboard' fluid>
        <p>orbitmechanic@protonmail.com</p>
      </Jumbotron>
    </>
  );
}

export default App;

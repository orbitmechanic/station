import React, { Component } from 'react'
import {Container, Button}from 'react-bootstrap';

export class Stage extends Component {
    render() {
        return (
            <Container id='backplane' fluid>
                <Container className='OutputScreen' id='Screen1'>One</Container>
                <Container className='OutputScreen' id='Screen2'>Two</Container>
                <Button className='ScreenControl' variant='primary'     id='Button1'>1</Button>
                <Button className='ScreenControl' variant='secondary'   id='Button2'>2</Button>
                <Button className='ScreenControl' variant='info'        id='Button3'>3</Button>
                <Button className='ScreenControl' variant='success'     id='Button4'>4</Button>
            </Container>
        )
    }
}

export default Stage

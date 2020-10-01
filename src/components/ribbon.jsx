import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class ribbon extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand 
                href="#home">
                    <img 
                    alt='<logo>'
                    src='./logo.svg'
                    height='30' width='30'
                    className='logo'
                    />
                Orbital Investments LLC
                </Navbar.Brand>
                <DropdownButton alignRight
                title="Mode"
                id="dropdown-menu-align-right">
                <Dropdown.Item eventKey="1">0 Idling</Dropdown.Item>
                <Dropdown.Item eventKey="2">1 Personell</Dropdown.Item>
                <Dropdown.Item eventKey="3">2 Market Tool</Dropdown.Item>
                <Dropdown.Item eventKey="4">3 Cryptozoo</Dropdown.Item>
                <Dropdown.Item eventKey="5">4 Experimental</Dropdown.Item>
                </DropdownButton>
            </Navbar>
        )
    }
}

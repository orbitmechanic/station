import React, { Component } from 'react'
import styled from 'styled-components';

const Baseboard = styled.div`
    color: wheat;
    text-align: right;
    vertical-align: bottom;
    background-color: #282c34;
    min-height:5vh;
    min-width:100vw;
    padding: 0px;
    margin: 0px;
`;

export default class kickplate extends Component {
    render() {
        return (
            <Baseboard fluid>
                <p>orbitmechanic@protonmail.com</p>
            </Baseboard>
        )
    }
}

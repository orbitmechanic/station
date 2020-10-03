import React, { Component } from 'react'
import { Container, Button}from 'react-bootstrap';
import styled from 'styled-components';
import imgWide from './images/RebelBase.jpg';

const Backplane = styled(Container)`
    background: url(${imgWide});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #282c34;
    max-width: 497px;
    max-height: 923px;
    padding: 0px;
    padding-bottom: 56.25%;
    margin: 0px;
    border: 0px;
    position:relative;
    max-width: 1920px;  
    max-height: 1080px; 
`;

const OutScreen = styled(Container)`
    background-color: none;
    border-radius: 50px;
    text-align: center;
    vertical-align: center;
    font-size: 25;
    color: black;
    padding: 0px;
    margin: 0px;
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: wheat;
`;

const HoloDisplay = styled(OutScreen)`
    border-radius: 75px;
    top: 5%;  height: 51%;
    left: 16%; width: 37%;
`;

const TacticalScreen = styled(OutScreen)`
    top: 5.5%; height: 72%;
    left: 78.6%; width: 20.6%;
    border-radius: 50px 0 0 50px;
    transform: perspective(400px) rotateY(-15deg);
`;

const ControlButton = styled(Button)`
    position: absolute;
    text-align: center;
    font-size:25;
    padding: 0px;
    margin: 0px;
`;

const TableButton1 = styled(ControlButton)`
    left:19%; width: 10%;
    top:60%; height: 5.5%;
    transform: 
        perspective(400px) 
        rotateZ(4deg)
        skewX(-37deg);
`;

const TableButton2 = styled(ControlButton)`
    left:41.8%; width: 8.5%;
    top:60.4%; height: 4.1%;
    transform: 
        perspective(400px) 
        rotateZ(-6.4deg)
        skewX(43deg);
`;

const TacticalButton1 = styled(ControlButton)`
    left:71%; width: 6%;
    top:85%; height: 5.5%;
    transform: 
        perspective(400px) 
        rotateZ(18deg)
        skewX(-18deg);
`;

const TacticalButton2 = styled(ControlButton)`
    left:79.5%; width: 7.8%;
    top:90%; height: 6%;
    transform: 
        perspective(400px) 
        rotateZ(18deg)
        skewX(-18deg);
`;

export class Stage extends Component {
    render() {
        return (
            <Backplane fluid>
                <HoloDisplay>One</HoloDisplay>
                <TacticalScreen>Two</TacticalScreen>
                <TableButton1>1</TableButton1>
                <TableButton2>2</TableButton2>
                <TacticalButton1>3</TacticalButton1>
                <TacticalButton2>4</TacticalButton2>
            </Backplane>
        )
    }
}

export default Stage

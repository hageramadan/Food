import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css';
import logo from './../images/logo.png';

const Navbars =()=>{
    return(
        <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#explore">Ecplore Food</Nav.Link>
            <Nav.Link href="#testi">Review</Nav.Link>
            <Nav.Link href="#fqa">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="lastNav" >26462263</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navbars;
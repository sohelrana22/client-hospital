import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand className="text-white" href="#home"> 
    <img width="60px" src={logo} alt="Logo" />
    Al-Karim Hospital</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
        <Nav.Link className="text-white" href="#link">Services</Nav.Link>
        <Nav.Link className="text-white" href="#link">About</Nav.Link>
        <Nav.Link className="text-white" href="#link">Contact us</Nav.Link>
        <Nav.Link className="text-white" href="#link">Login</Nav.Link>
        <Nav.Link className="text-white" href="#link">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
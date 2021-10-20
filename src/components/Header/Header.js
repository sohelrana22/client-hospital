import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const {AllContexts} = useAuth()
  const {user, logOut} = AllContexts;
    return (
        <div>
            <Navbar className="header" expand="lg">
  <Container>
    <Navbar.Brand className="text-white" href="#home"> 
    <img width="60px" src={logo} alt="Logo" />
    Al-Karim Hospital</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/services">Services</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/doctor">Doctor</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/contact">Contact us</Nav.Link>
      {!user.email ?  (<>
        <Nav.Link as={NavLink} className="text-white" to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} className="text-white" to="/register">Register</Nav.Link>
        </>
        ) : (
         <>
             <span className="text-white align-items-center mt-2">{user.displayName}</span>
          <Nav.Link className="text-white ">
            <button onClick={logOut} className="btn btn-info p-1">Logout</button>
          </Nav.Link>
         </>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
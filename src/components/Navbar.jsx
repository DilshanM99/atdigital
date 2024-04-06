import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../styles/navbar.scss';
import logo from '../assets/Logo.png';

function Navbarr() {
  return (
    <div className="nav-container">
      <Navbar expand="md lg">
        <Container fluid>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#home">SERVICES</Nav.Link>
              <Nav.Link href="#link">ABOUT US</Nav.Link>
              <Nav.Link href="#link">CONTACT US</Nav.Link>
              <Nav.Link href="#link">CAREERS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>                                                                                                                                                             
  );
}

export default Navbarr;

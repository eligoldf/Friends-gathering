import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const GatheringNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Friends Gathering</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/#/groceries">Menu</Nav.Link>
      <Nav.Link href="/#/guests">Guests</Nav.Link>
      <Nav.Link href="/#/adress">Event Adress</Nav.Link>
    </Navbar.Collapse>
    <Nav className="ml-auto">
      <Nav.Link href="/#/login">Login</Nav.Link>
      <Nav.Link href="/#/signup">Sign Up</Nav.Link>
      <Nav.Link href="/#/logout">Logout</Nav.Link>
    </Nav>
  </Navbar>
);

export default GatheringNavbar;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { HomeIcon } from '@primer/octicons-react';
import { logoutSuccess } from '../store/user';

import logo from '../images/logo.png';

const GatheringNavbar = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.user.activeUser);
  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.location = '/';
  };

  const loginEl = (!activeUser) && <Nav.Link href="/#/login">Login</Nav.Link>;
  const signupEl = (!activeUser) && <Nav.Link href="/#/signup">Signup</Nav.Link>;
  const logoutEl = (activeUser) && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <img src={logo} style={{ width: '40px', height: '40px' }} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-links mr-auto">
          <Nav.Link href="/"><HomeIcon size={24} /></Nav.Link>
          <Nav.Link href="/#/groceries">Menu</Nav.Link>
          <Nav.Link href="/#/guests">Guests</Nav.Link>
          <Nav.Link href="/#/adress">Event Adress</Nav.Link>
        </Nav>
        <Nav className="nav-links ml-auto">
          {loginEl}
          {signupEl}
          {logoutEl}
        </Nav>
        <Nav>
          {activeUser && (
          <span style={{ color: 'purple' }}>
            Hello
            {' '}
            {activeUser}
          </span>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default GatheringNavbar;

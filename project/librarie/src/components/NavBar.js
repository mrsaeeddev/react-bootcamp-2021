import React from 'react';
import logo from '../logo.png';
import { Navbar, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Librarie
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBar;
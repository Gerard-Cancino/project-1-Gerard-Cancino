import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../../models/User';

interface INavbarProps{
  user:User
}

export class NavbarComponent extends React.Component<INavbarProps,any> {
  render(){
    return(
      <Navbar bg="clear" expand="lg">
        <Navbar.Brand href="/">FakeyMorgan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink 
              exact
              to="/"
              activeStyle={{
                fontWeight:"bold",
              }}
              className="navbar-link m-3">Home</NavLink>
            <NavLink 
              to="/login"
              activeStyle={{
                fontWeight:"bold",
              }}
              className="navbar-link m-3">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}
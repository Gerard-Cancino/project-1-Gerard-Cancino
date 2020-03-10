import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../../models/User';

interface INavbarProps {
  profile:User
  revatureLogoutActionMapper: () => void
}

export class NavbarComponent extends React.Component<INavbarProps,any> {
  constructor(props:any){
    super(props);
    this.props.revatureLogoutActionMapper.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout(){
    this.props.revatureLogoutActionMapper();
    this.setState({shouldRedirect:true});
  }

  render(){
    return(
      <React.Fragment>
        {this.props.profile.userId!==-1?(
          <Navbar bg="clear" expand="lg">
            <Navbar.Brand href="/mainpage">
              <NavLink 
                to="/mainpage"
                className="navbar-link">FakeyMorgan</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink 
                  to="/mainpage"
                  activeStyle={{
                    fontWeight:"bold",
                  }}
                  className="navbar-link m-3">Main</NavLink>
                <NavLink 
                  to="/profile"
                  activeStyle={{
                    fontWeight:"bold",
                  }}
                  className="navbar-link m-3">Profile</NavLink>
                <NavLink
                  to="/"
                  className="navbar-link m-3"
                  onClick={this.logout}>Logout</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ):(     
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
        )}
      </React.Fragment>
    )
  }
}
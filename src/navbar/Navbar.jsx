import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div className="navigation">
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to='/'><span className="navItems">Home</span></Link>
            </NavItem>
            <NavItem>
              <Link to='/jobs'><span className="navItems">Jobs</span></Link>
            </NavItem>
            <NavItem>
              <Link to='/about'><span className="navItems">About</span></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
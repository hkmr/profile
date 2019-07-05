import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Header Of the Application

class Header extends Component{

	render() {

		return(
			
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			  <Navbar.Brand href="#home">Harsh Kumar</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto"/>
			    <Nav>
			      <Nav.Link href="#about">About</Nav.Link>
			      <Nav.Link href="#achievement">Achievement</Nav.Link>
			      <Nav.Link href="#projects">Projects</Nav.Link>
			      <Nav.Link href="#skills">Skills</Nav.Link>
			      <Nav.Link href="#contact">Contact</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>

		);
	}

}

export default Header;
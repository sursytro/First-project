import React, { Component } from 'react';
import {Navbar,Nav,} from 'react-bootstrap';
import styled from 'styled-components';

class Navbars extends Component  {
    state = {  }
    render() { 
        return (
          <NavWrapper>
        <Navbar>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
    </Nav>

  </Navbar.Collapse>
</Navbar>
</NavWrapper>
          );
    }
}



const NavWrapper=styled.div `  
background-color:red ;
a{
  color:#ffff !important;
}
`


export default Navbars;
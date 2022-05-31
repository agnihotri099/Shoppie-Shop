import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const header = () => {
  return (
    <><Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
    <Container>  
    <LinkContainer to='/'>
    <Navbar.Brand >Online Shop</Navbar.Brand>
    </LinkContainer>
    

    
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <LinkContainer to="/cart">
        <Nav.Link >
          <i className="fa-solid fa-cart-shopping"></i>
          &nbsp;Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signin">
          <Nav.Link >
          <i class="fa-solid fa-user"></i>
          &nbsp;SignIn</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></>
  )
}

export default header
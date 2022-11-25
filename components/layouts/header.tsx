import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href={'/create'}>Create</Nav.Link>
            <Nav.Link as={Link} href={'/view'}>View</Nav.Link>
            <Nav.Link as={Link} href={'/search'}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
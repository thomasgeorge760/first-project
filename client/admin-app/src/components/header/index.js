import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Offcanvas } from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container fluid>
                {/* <Navbar.Brand href="#">Olive</Navbar.Brand> */}
                <NavLink className="navbar-brand" to="/">Olive</NavLink>

                {/* <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="offcanvasBody">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link  href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Account" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas> */}

                <Nav>
                  <NavLink className="nav-link" to="/signin">Sign in</NavLink>
                  <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header

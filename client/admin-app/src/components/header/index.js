import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Offcanvas } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../../actions';

function Header() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const adminSignout = () => {
    dispatch(signout())
  }

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <NavLink className="nav-link" to="/signin">Sign in</NavLink>
        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
      </Nav>
    );
  }

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        
        <span className="nav-link signout button" onClick={adminSignout} >Sign out</span>
        
      </Nav>
    );
  }

  return (
    <Navbar bg="dark" fixed="top" variant="dark" style={{ zIndex: 101 }} >
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

        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Container>
    </Navbar>
  )
}

export default Header

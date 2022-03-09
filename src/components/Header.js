import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            MERN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/empleados"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Employees
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

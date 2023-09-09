import React from "react";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import Button from "../Button";
import Loader from "../Loader";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <BNavbar collapseOnSelect expand="lg" variant="dark" className="bg-transparent section-margin">
      <Container fluid className="w-100 d-flex align-items-center">
        <BNavbar.Brand href="#">Pawan Sargar</BNavbar.Brand>
        <BNavbar.Toggle />
        <BNavbar.Collapse>
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex gap-4">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <div>
              <Button variant="light">Hire Me</Button>
            </div>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

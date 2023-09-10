import React from "react";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import Button from "../Button";
import Loader from "../Loader";
import { poppins } from "@/assets/fonts";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="bg-transparent section-margin"
    >
      <Container
        fluid
        className={`${poppins.className} w-100 d-flex align-items-center`}
      >
        <BNavbar.Brand className="fw-bold fs-2" href="#">Pawan Sargar</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex gap-4">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <a target="_blank" href="https://www.fiverr.com/pavansargar">
              <Button className="bg-color-primary" variant="dark">Hire Me</Button>
            </a>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

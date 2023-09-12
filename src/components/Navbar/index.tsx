import React from "react";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import { poppins } from "@/assets/fonts";
import Button from "../Button";
import Loader from "../Loader";

import styles from "./index.module.css";

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
        className={`${poppins.className} ${styles.wrapper} w-100 d-flex align-items-center`}
      >
        <BNavbar.Brand className="fw-bold fs-2" href="#">
          Pawan Sargar
        </BNavbar.Brand>

        <div className={`${styles.menu}`}>
          <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex gap-4">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <a target="_blank" href="https://www.fiverr.com/pavansargar">
                <Button className="bg-color-primary" variant="dark">
                  Hire Me
                </Button>
              </a>
            </Nav>
          </BNavbar.Collapse>
        </div>

        <a
          className={`${styles.button}`}
          target="_blank"
          href="https://www.fiverr.com/pavansargar"
        >
          <Button className="bg-color-primary" variant="dark">
            Hire Me
          </Button>
        </a>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

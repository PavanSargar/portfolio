import React from "react";
import { motion } from "framer-motion";
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import { poppins } from "@/assets/fonts";
import Button from "../Button";

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
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="fw-bold fs-2"
          >
            Pawan Sargar
          </motion.h1>
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
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="btn btn-dark bg-color-primary"
                >
                  Hire Me
                </motion.button>
              </a>
            </Nav>
          </BNavbar.Collapse>
        </div>

        <motion.a
          className={`${styles.button}`}
          target="_blank"
          href="https://www.fiverr.com/pavansargar"
        >
          <Button className="bg-color-primary" variant="dark">
            Hire Me
          </Button>
        </motion.a>
      </Container>
    </BNavbar>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { poppins } from "@/assets/fonts";

import Button from "@/components/Button";
import DUSTIMAGE from "@/assets/images/Dust.svg";

import styles from "./index.module.css";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={`${styles.container} section-margin`}>
      <div
        className={`${poppins.className} ${styles.header}  d-flex align-items-center justify-content-between`}
      >
        <h3 className={` h-3 fw-medium color-light me-4`}>
          Got a project in mind?
        </h3>
        <div className={`bg-color-primary w-100 ${styles.hr} mb-1`}></div>
      </div>

      <Row className="align-items-start gap-0">
        <Col md={6} sm={12} className={`${styles.left}`}>
          <Image src={DUSTIMAGE} alt="" />
        </Col>
        <Col md={6} sm={12} className={`${styles.right}`}>
          <form className={`${styles.form} d-flex flex-column gap-4`}>
            <div className="d-flex align-items-center gap-4">
              <div>
                <label className="color-dim ms-1 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-100"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div>
                <label className="color-dim ms-1 mb-2" htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  className="w-100"
                  placeholder="Enter Email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="color-dim ms-1 mb-2" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-100"
                placeholder="Enter your requirements "
                name="message"
                id="message"
                rows={10}
              />
            </div>
            <Button size="md" className={`${styles.button} bg-color-primary`}>
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

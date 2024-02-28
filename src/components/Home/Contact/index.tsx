import React, { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { Col, Row, Spinner } from "react-bootstrap";
import { stagger, useAnimate } from "framer-motion";
import { poppins } from "@/assets/fonts";

import Button from "@/components/Button";
import DUSTIMAGE from "@/assets/images/Dust.svg";

import styles from "./index.module.css";
import emailjsConfig from "./emailConfig";

type Props = {};

const Contact = (props: Props) => {
  const [mailSent, setMailSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  const handleSendEmail = (e: any) => {
    e.preventDefault();
    if (e.target.name.value && e.target.email.value && e.target.message.value) {
      setLoading(true);
      emailjs
        .sendForm(
          emailjsConfig.serviceID,
          emailjsConfig.templateID,
          e.target,
          emailjsConfig.userID
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setMailSent(true);
          e.target.reset();
          setLoading(false);
        })
        .catch((error) => {
          console.error("Email failed to send:", error.text);
          setError(true);
        });
    } else {
      animate(
        "input, textarea, button",
        { x: [-10, 0, 10, 0, -10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
      return;
    }
  };
  return (
    <div id="contact" className={`${styles.container} section-margin`}>
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
          <form
            onSubmit={handleSendEmail}
            ref={scope}
            className={`${styles.form} d-flex flex-column gap-4`}
          >
            <div className="d-flex align-items-center gap-4">
              <div>
                <label className="color-dim ms-1 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
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
                  name="user_email"
                  className="w-100"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => {}}
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
            {mailSent ? (
              ""
            ) : (
              <Button
                type="submit"
                size="md"
                className={`${styles.button} bg-color-primary`}
              >
                {loading ? <Spinner size="sm" /> : "Submit"}
              </Button>
            )}
          </form>
          {mailSent && (
            <p className="text-success mt-3 fw-md">
              Pawan will get back to you shortly!
            </p>
          )}
          {error && (
            <p className="text-danger mt-3 fw-md">
              Something went wrong!, please try again
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

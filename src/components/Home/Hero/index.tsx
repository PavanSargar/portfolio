import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Button from "@/components/Button";
import { poppins } from "@/assets/fonts";
import styles from "./index.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={`${styles.container} d-flex align-items-center section-margin`}
    >
      <Row className={`${styles.row} d-flex align-items-center`}>
        <Col md={6} sm={12}>
          <div
            className={`${styles.header} d-flex align-items-center justify-content-start w-100`}
          >
            <div>
              <h2 className={`${poppins.className} color-light h-1`}>
                Hi, I am Pawan! <br /> A{" "}
                <span className="color-primary">Web Developer</span> based in
                INDIA.
              </h2>
              <p
                className={`${styles.description} ${poppins.className} mb-4 color-dim`}
              >
                As a web developer, I create user-centric digital products and
                interactive experiences to help businesses achieve their goals.
              </p>
              <div className={`${styles["button-container"]}`}>
                <Button
                  size="lg"
                  className={` ${styles.button} bg-color-primary`}
                >
                  Checkout my works!
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div
            className={`${styles["img-container"]} w-100 d-flex align-items-center justify-content-center`}
          >
            <Image
              width={400}
              height={400}
              className="rounded-circle"
              src="https://media.licdn.com/dms/image/D4D03AQGyLiK_H-KdPA/profile-displayphoto-shrink_800_800/0/1673636094627?e=1699488000&v=beta&t=AjeNgiJfof7vpWYsdxKuL8t_gU9enaL_pxUL1p3BgOU"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;

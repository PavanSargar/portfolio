"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { poppins } from "@/assets/fonts";
import styles from "./index.module.css";

import ProfileImg from "@/assets/images/professional.jpeg";

type Props = {};

const Hero = (props: Props) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.7
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 60
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const imageHoverVariants = {
    rest: { 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`${styles.container} d-flex align-items-center section-margin`}
    >
      <Row
        className={`${styles.row} d-flex align-items-center justify-content-between`}
      >
        <Col xl={6} lg={6} md={6} sm={12}>
          <motion.div
            variants={textVariants}
            className={`${styles.header} d-flex align-items-center justify-content-start w-100`}
          >
            <div>
              <motion.h2 
                variants={headingVariants}
                className={`${poppins.className} color-light h-1`}
              >
                Hi, I am Pawan! <br /> A{" "}
                <span className="color-primary">Front-end Developer</span> based
                in INDIA.
              </motion.h2>
              <motion.p
                variants={descriptionVariants}
                className={`${styles.description} ${poppins.className} mb-4 color-dim`}
              >
                As a web developer, I create user-centric digital products and
                interactive experiences to help businesses achieve their goals.
              </motion.p>
              <motion.div 
                variants={socialVariants}
                className={`${styles["button-container"]} d-flex gap-4`}
              >
                <motion.a 
                  variants={socialIconVariants}
                  whileHover="hover"
                  target="_blank" 
                  href="https://www.github.com/pavansargar"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={32} color="#be45e0" />
                </motion.a>
                <motion.a
                  variants={socialIconVariants}
                  whileHover="hover"
                  target="_blank"
                  href="https://www.linkedin.com/in/pavan-sargar/"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={32} color="#be45e0" />
                </motion.a>
                <motion.a 
                  variants={socialIconVariants}
                  whileHover="hover"
                  target="_blank" 
                  href="https://www.twitter.com/pavan_sargar"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={32} color="#be45e0" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </Col>
        <Col xl={6} lg={6} md={6} sm={12}>
          <motion.div
            // variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`${styles["img-container"]} w-100 d-flex align-items-center justify-content-center`}
          >
            <motion.div
              variants={imageHoverVariants}
              initial="rest"
              whileHover="hover"
              className={styles["image-wrapper"]}
            >
              <Image
                priority
                width={400}
                height={400}
                className="rounded-circle"
                src={ProfileImg}
                alt="Pawan Sargar | Frontend Developer"
              />
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Hero;

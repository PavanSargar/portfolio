"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "react-bootstrap";
import { FaLink } from "react-icons/fa6";

import styles from "./index.module.css";

interface ProjectCardInterface {
  technologies: string[];
  description: string;
  img: string;
  githubURL: string;
  liveURL: string;
  id: any;
}

const dummySkills = [
  "React",
  "Next",
  "TypeScript",
  "Tailwind",
  "MUI",
  "Redux",
  "Zustand",
];

const ProjectCard = (props: ProjectCardInterface) => {
  const {
    technologies = dummySkills,
    githubURL,
    liveURL,
    img,
    description,
    id,
  } = props;
  
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    rest: { 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <motion.div
      className={`${styles.card}`}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className={`${styles["card-header"]}`}>
        <Image 
          src={img} 
          alt={`Preview of project`} 
          height={200} 
          width={300}
          className={styles["card-image"]}
        />
      </div>
      
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className={`${styles.description} text-white`}
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={`${styles["description-header"]}`}>
              {description}
            </div>
            <hr className="mb-3" />
            <div className="d-flex align-items-center justify-content-between">
              <a
                className={`${styles.link} color-primary fw-bold`}
                target="_blank"
                rel="noopener noreferrer"
                href={liveURL}
                onClick={(e) => e.stopPropagation()}
              >
                Live <FaLink />
              </a>
              <a
                className={`${styles.link} color-primary fw-bold`}
                target="_blank"
                rel="noopener noreferrer"
                href={githubURL}
                onClick={(e) => e.stopPropagation()}
              >
                Github <FaLink />
              </a>
            </div>
            <hr className="mt-3" />

            <div
              className={`${styles.skills} d-flex align-items-center gap-2 flex-wrap`}
            >
              {technologies?.map((item, i) => (
                <Badge
                  key={`${id}-${item}-${i}`}
                  className={`${styles.technology} bg-light rounded px-2 color-primary text-center py-1`}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;

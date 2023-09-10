import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "react-bootstrap";

import styles from "./index.module.css";

interface ProjectCardInterface {
  onShowDescription?: (value: boolean, id: any) => void;
  showDescription?: boolean;
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
    onShowDescription,
    showDescription,
    technologies = dummySkills,
    githubURL,
    liveURL,
    img,
    description,
    id,
  } = props;
  const descriptionVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const descriptionExit = {
    y: -100,
    opacity: 0,
  };

  return (
    <motion.div
      onMouseOver={() => onShowDescription && onShowDescription(true, id)}
      onMouseEnter={() => onShowDescription && onShowDescription(true, id)}
      onMouseLeave={() => onShowDescription && onShowDescription(false, id)}
      onMouseOut={() => onShowDescription && onShowDescription(false, id)}
      className={`${styles.card}`}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "tween", damping: 1, stiffness: 0 }}
      layout
    >
      <div className={`${styles["card-header"]}`}>
        <Image src={img} alt="" height={200} width={300} />
      </div>
      <AnimatePresence>
        {showDescription && (
          <motion.div
            className={`${styles.description}  text-white`}
            variants={descriptionVariants}
            initial="hidden"
            animate={showDescription ? "visible" : "hidden"}
            exit={descriptionExit}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "just",
              damping: 10,
              stiffness: 10,
            }}
          >
            <div className={`${styles["description-header"]}`}>
              {description}
            </div>
            <hr className="mb-3" />
            <div className=" d-flex align-items-center justify-content-between">
              <a
                className="text-decoration-underline color-primary"
                target="_blank"
                rel="external"
                href={liveURL}
              >
                View Live
              </a>
              <a
                className="text-decoration-underline color-primary"
                target="_blank"
                rel="external"
                href={githubURL}
              >
                Github
              </a>
            </div>
            <hr className="mt-3" />

            <div
              className={`${styles.skills} d-flex align-items-center gap-2 flex-wrap `}
            >
              {technologies?.map((item, i) => (
                <Badge
                  key={i}
                  className={`${styles.technology} bg-light rounded px-2 color-primary text-center py-2 `}
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

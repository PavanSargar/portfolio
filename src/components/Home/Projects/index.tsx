"use client";
import React, { useState } from "react";
import { poppins } from "@/assets/fonts";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

import styles from "./index.module.css";

import { allSkills, projectDetails } from "./projectDetails";

type Props = {};

const Projects = (props: Props) => {
  const [active, setActive] = useState("all");

  const handleSkillActive = (key: string) => {
    setActive(key);
  };

  const filteredProjects = projectDetails.filter((item) =>
    active === "all" ? item : item.skills.includes(active)
  );

  return (
    <div id="projects" className={`${styles.container} section-margin`}>
      <div className={styles.section}>
        <div
          className={`${poppins.className} ${styles.header} mb-3 d-flex align-items-center justify-content-between`}
        >
          <h3 className={` h-3 fw-medium color-light me-4`}>Projects</h3>
          <div className={`bg-color-primary w-100 ${styles.hr}`}></div>
          {/* <h6 className="color-light ms-4">View all ~~</h6> */}
        </div>

        <div className="d-flex align-items-center gap-3 mb-5 flex-wrap">
          <Button
            onClick={() => handleSkillActive("all")}
            className={`${styles.button} ${active === "all" && styles.active} `}
          >
            All
          </Button>
          {allSkills.map((item) => (
            <Button
              onClick={() => handleSkillActive(item)}
              key={item + "1"}
              className={`${styles.button} ${
                active === item && styles.active
              } `}
            >
              {item}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className={`${styles.projects} d-flex align-items-start justify-content-start gap-4 flex-wrap`}
        >
          <AnimatePresence mode="wait">
            {filteredProjects?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <ProjectCard
                  id={item?.id}
                  description={item?.shortDescription}
                  githubURL={item?.githubLink}
                  liveURL={item?.liveLink}
                  img={item?.img}
                  technologies={item?.skills}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

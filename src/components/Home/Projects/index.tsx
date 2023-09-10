import React, { useState } from "react";
import { firaCode, poppins } from "@/assets/fonts";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

import styles from "./index.module.css";

import { allSkills, projectDetails } from "./projectDetails";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState<any[]>(projectDetails);
  const [active, setActive] = useState("all");

  const handleShowDescription = (data: boolean, id: any) => {
    setProjects((prevProjects) =>
      prevProjects.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            active: data,
          };
        }
        return item;
      })
    );
  };

  const handleSkillActive = (key: string) => {
    setActive(key);
  };

  const filteredProjects = projects.filter((item) =>
    active === "all" ? item : item.skills.includes(active)
  );

  return (
    <div className={`${styles.container} section-margin`}>
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
          // layout
          className={`${styles.projects} d-flex align-items-start justify-content-start gap-4 flex-wrap`}
        >
          {/* <AnimatePresence> */}
          {filteredProjects?.map((item) => (
            <ProjectCard
              key={item?.id}
              id={item?.id}
              showDescription={item?.active}
              onShowDescription={(data, id) =>
                handleShowDescription(data, item?.id)
              }
              description={item?.shortDescription}
              githubURL={item?.githubLink}
              liveURL={item?.liveLink}
              img={item?.img}
              technologies={item?.skills}
            />
          ))}
          {/* </AnimatePresence> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

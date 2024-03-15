/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { personalProjects } from "../constants";
import { textVariant } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import SectionWrapper from "../hoc/SectionWrapper";
import { ProjectCard } from "./Cards/ProjectCard";

const PersonalProject = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Personal Projects.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {personalProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(PersonalProject, "project");

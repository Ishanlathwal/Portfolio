/* eslint-disable react/prop-types */

import "react-vertical-timeline-component/style.min.css";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: project.iconBackgroundColor }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.icon}
            alt={project.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{project.title}</h3>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            <a href={project.liveLink} target="_blank">
              Live Link
            </a>
          </li>
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            <a href={project.github} target="_blank">
              Github Link
            </a>
          </li>
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

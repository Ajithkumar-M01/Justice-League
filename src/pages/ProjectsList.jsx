import React from "react";
import { ProjectTitle } from "../components/ProjectTitle";
// import { Project01Card, Project02Card, Project03Card, Project04Card, Project05Card } from "../components/ProjectCard";
import { Project01Card, Project02Card, Project03Card, Project04Card, Project05Card, Project06Card } from "../components/DisplayCard";

const projects = [
  { id: 1, title: "Superman", card: Project01Card},
  { id: 2, title: "Batman", card: Project02Card},
  { id: 3, title: "Wonder Woman", card: Project03Card},
  { id: 4, title: "Flash", card: Project04Card},
  { id: 5, title: "Green Lantern", card: Project05Card },
  { id: 6, title: "Aquaman", card: Project06Card},
];
const ProjectsList = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectTitle id={project.id}>{project.title}</ProjectTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className="aspect-square w-full rounded-2xl relative">
            {projects.map((project) => (
              <project.card id={project.id} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;

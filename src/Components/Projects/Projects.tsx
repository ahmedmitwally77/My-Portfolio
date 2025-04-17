import React from "react";
import { projects } from "../../../data";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-8">
      <h3 className="heading text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        A Small Selections of
        <span className="text-purple-300"> Recent Projects</span>
      </h3>

      <div className="project-cards flex flex-wrap justify-center items-center gap-8 gap-y-40 mt-32">
        {projects.map(
          (project: {
            id: number;
            title: string;
            des: string;
            img: string;
            iconLists: string[];
            link: string;
          }) => (
            <ProjectCard key={`project-${project.id} `} data={project}/>
          )
        )}
      </div>
    </section>
  );
}

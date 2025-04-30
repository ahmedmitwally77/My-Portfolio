"use client"
import React, { useState } from "react";
import { projects } from "../../../data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import MainHeading from "../MainHeading/MainHeading";
import { IconType } from "react-icons/lib";

export default function Projects() {
  const allProducts=projects
  const [products, setProducts] = useState(projects.slice(0,3))
  function handleClick({start,end}:{start:number,end:number}){
    setProducts(allProducts.slice(start,end))
  }
  return (
    <section id="projects" className="py-8 px-8">
      <h3 className="heading text-center text-xl dark:text-white text-black  md:text-3xl tracking-wide font-semibold font-sans">
        A Small Selections of
        <span className="text-purple-300">
          {" "}
          <MainHeading title="Recent Projects" />
        </span>
      </h3>

      <div className="project-cards flex flex-wrap justify-center items-center gap-8 gap-y-52 mt-32">
        {products.map(
          (project: {
            id: number;
            title: string;
            des: string;
            img: string;
            iconLists: IconType[]; // أو React.ComponentType[]
            link: string;
          }) => (
            <ProjectCard key={`project-${project.id}`} data={project} />
          )
        )}
      </div>
      <div className="pagination flex gap-3  mt-32 justify-center">
        <span className="dark:bg-white bg-gray-700 p-3 rounded-full dark:text-black w-6 h-6 flex justify-center items-center cursor-pointer" onClick={()=>handleClick({start:0,end:3})}>1</span>
        <span className="dark:bg-white p-3 bg-gray-700 rounded-full dark:text-black w-6 h-6 flex justify-center items-center cursor-pointer" onClick={()=>handleClick({start:3,end:7})}>2</span>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useRef } from "react";
import { projects } from "../../../data";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import MainHeading from "../MainHeading/MainHeading";
import { IconType } from "react-icons/lib";
import { motion } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Projects() {
  const allProducts = projects;
  const sectionRef = useRef<HTMLElement | null>(null);

  const [products, setProducts] = useState(projects.slice(0, 6));
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  function handleClick({
    start,
    end,
    page,
  }: {
    start: number;
    end: number;
    page: number;
  }) {
    setLoading(true);
    setActivePage(page);
    setTimeout(() => {
      setProducts(allProducts.slice(start, end));
      setLoading(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  }

  return (
    <section ref={sectionRef}  id="projects" className="py-8 px-4 sm:px-8 max-w-7xl mx-auto overflow-x-hidden">
      <h3 className="heading text-center text-xl dark:text-white text-black md:text-3xl tracking-wide font-semibold font-sans">
        A Small Selections of
        <span className="text-purple-300">
          {" "}
          <MainHeading title="Recent Projects" />
        </span>
      </h3>

      {loading ? (
        <div className="flex justify-center items-center mx-auto mt-32 mb-32">
          <ClimbingBoxLoader color="#4F46E5"/>
        </div>
      ) : (
        <motion.div
  className="project-cards w-full max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 gap-y-52 mt-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {products.map(
            (project: {
              id: number;
              title: string;
              des: string;
              img: string;
              iconLists: IconType[];
              link: string;
            }) => (
              <motion.div key={`project-${project.id}`} variants={cardVariants}>
                <ProjectCard data={project} />
              </motion.div>
            )
          )}
        </motion.div>
      )}

      <div className="pagination flex gap-3 mt-32 justify-center">
        {[1, 2,3].map((page) => (
          <span
            key={page}
            className={`p-3 rounded-full w-6 h-6 flex justify-center items-center cursor-pointer 
              ${activePage === page ? "bg-purple-500 text-white" : "bg-gray-700 dark:bg-white dark:text-black"}`}
            onClick={() =>
              handleClick({
                start: (page - 1) * 6,
                end: page * 6,
                page,
              })
            }
          >
            {page}
          </span>
        ))}
      </div>
    </section>
  );
}

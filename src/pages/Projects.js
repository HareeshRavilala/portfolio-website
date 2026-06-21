import { useState } from "react";

import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";

import { projectsData } from "../data/projects";

function Projects() {

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const technologies = [
    "All",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Express"
  ];

  const filteredProjects =
    projectsData.filter(project => {

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === "All"
          ? true
          : project.tech.includes(
              filter
            );

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (

    <div className="container py-5 mt-5">

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
      >

        <h1 className="section-title">
          Projects
        </h1>

        {/* Search */}

        <div className="row mb-4">

          <div className="col-md-6 mx-auto">

            <input type="text" className="form-control project-search" placeholder="Search Projects..."
              value={search}
              onChange={e =>setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* Filter */}

        <div className="text-center mb-5">

          {
            technologies.map(
              tech => (

                <button
                  key={tech}
                  className={`btn me-2 mb-2 ${
                    filter === tech
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    setFilter(tech)
                  }
                >
                  {tech}
                </button>

              )
            )
          }

        </div>

        {/* Cards */}

        <div className="row">

          {
            filteredProjects.map(
              project => (

                <div
                  key={project.id}
                  className="col-md-6 col-lg-4 mb-4"
                >

                  <ProjectCard
                    project={project}
                  />

                </div>

              )
            )
          }

        </div>

      </motion.div>

    </div>
  );
}

export default Projects;
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

function ProjectCard({
  project
}) {

  return (

    <motion.div
      className="card project-card glass"
      whileHover={{
        y: -10
      }}
    >

      <img
        src={project.image}
        alt={project.title}
        className="card-img-top"
      />

      <div className="card-body">

        <h5>
          {project.title}
        </h5>

        <p>
          {project.description}
        </p>

        <div className="mb-3">

          {
            project.tech.map(
              (item, index) => (
                <span
                  key={index}
                  className="badge bg-primary me-2"
                >
                  {item}
                </span>
              )
            )
          }

        </div>

        <div className="d-flex gap-2">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            <FaGithub />
            {" "}GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaExternalLinkAlt />
            {" "}Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;
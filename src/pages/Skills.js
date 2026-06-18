import { useState } from "react";

import { motion } from "framer-motion";

import SkillCard from "../components/SkillCard";

import { skillsData } from "../data/skills";

function Skills() {

  const [category, setCategory] =
    useState("All");

  const filteredSkills =
    category === "All"
      ? skillsData
      : skillsData.filter(
          skill =>
            skill.category === category
        );

  return (

    <div className="container py-5 mt-5">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h1 className="section-title">
          Skills
        </h1>

        {/* Filter Buttons */}

        <div className="text-center mb-5">

          <button
            className={`btn me-2 ${
              category === "All"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() =>
              setCategory("All")
            }
          >
            All
          </button>

          <button
            className={`btn me-2 ${
              category === "Frontend"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() =>
              setCategory("Frontend")
            }
          >
            Frontend
          </button>

          <button
            className={`btn me-2 ${
              category === "Backend"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() =>
              setCategory("Backend")
            }
          >
            Backend
          </button>

          <button
            className={`btn me-2 ${
              category === "Database"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() =>
              setCategory("Database")
            }
          >
            Database
          </button>

          <button
            className={`btn ${
              category === "Tools"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() =>
              setCategory("Tools")
            }
          >
            Tools
          </button>

        </div>

        {/* Skill Grid */}

        <div className="row">

          {
            filteredSkills.map(skill => (

              <div
                key={skill.id}
                className="col-md-6 col-lg-4"
              >

                <SkillCard
                  name={skill.name}
                  percentage={
                    skill.percentage
                  }
                  icon={skill.icon}
                />

              </div>

            ))
          }

        </div>

      </motion.div>

    </div>
  );
}

export default Skills;
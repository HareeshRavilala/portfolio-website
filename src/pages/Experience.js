import { motion } from "framer-motion";

function Experience() {

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
          Experience
        </h1>

        {/* Internship */}

        <div className="glass p-4 rounded-4 mb-4">

          <h3>
            Internship Experience
          </h3>

          <div className="timeline">

            <div className="timeline-item">

              <h5>
               reactJS Developer 
              </h5>

              <p>
                Worked on React.js
                applications, REST APIs,
                reusable components,
                and backend integration.
              </p>

              <small>
                Jan 2024 - Jun 2024
              </small>

            </div>

          </div>

        </div>

        {/* Work Experience */}

        <div className="glass p-4 rounded-4 mb-4">

          <h3>
            Work Experience
          </h3>

          <div className="timeline">

            <div className="timeline-item">

              <h5>
                ReactJS Developer
              </h5>

              <p>
                Building scalable web
                applications using
                React.js, Node.js,
                Express.js and MongoDB.
              </p>

              <small>
                Current
              </small>

            </div>

          </div>

        </div>

        {/* Achievements */}

        <div className="glass p-4 rounded-4 mb-4">

          <h3>
            Achievements
          </h3>

          <ul>

            <li>
              Successfully developed
              multiple full-stack projects.
            </li>

            <li>
              Built responsive and
              reusable UI components.
            </li>

            <li>
              Implemented secure
              authentication systems.
            </li>

            <li>
              Optimized application
              performance.
            </li>

            <li>
              Worked with APIs and
              database integration.
            </li>

          </ul>

        </div>

        {/* Certifications */}

        <div className="glass p-4 rounded-4">

          <h3>
            Certifications
          </h3>

          <ul>

            <li>
              ReactJS Development
            </li>

            <li>
              JavaScript Programming
            </li>

            <li>
              Full Stack Development
            </li>

            <li>
              Git & GitHub
            </li>

          </ul>

        </div>

      </motion.div>

    </div>
  );
}

export default Experience;
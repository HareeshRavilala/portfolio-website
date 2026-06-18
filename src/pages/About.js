import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

function About() {

  return (

    <div className="container py-5 mt-5">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h1 className="section-title">
          About Me
        </h1>

        {/* Professional Summary */}

        <div className="glass p-1 rounded-2 mb-4">

          <h3>
            Professional Summary
          </h3>

          <p>
            ReactJS Developer with 4 years of experience building scalable,
             high-performance web applications using ReactJS,JavaScript (ES6+),TypeScript, Redux, and REST APIs.
              Skilled in component-based architecture, JWT authentication,performance optimization , responsive UI development, Agile methodologies
          </p>

        </div>

        {/* Career Objective */}

        <div className="glass p-1 rounded-2 mb-4">

          <h3>
            Career Objective
          </h3>

          <p>
            Seeking opportunities to contribute
            as a ReactJs where I can
            utilize my technical expertise,
            continuously learn new technologies,
            and deliver high-quality software
            solutions.
          </p>

        </div>

        {/* Personal Details */}

        <div className="glass p-1 rounded-2 mb-4">

          <h3>
            Personal Details
          </h3>

          <div className="row">

            <div className="col-md-6">

              <p>
                <strong>Name:</strong>
                {" "}Hareesh Ravilala
              </p>

              <p>
                <strong>Location:</strong>
                {" "}India,Hyderabad
              </p>

            </div>

            <div className="col-md-6">

              <p>
                <strong>Role:</strong>
                {" "}ReactJs Developer
              </p>
              <p>
            <strong>Email:</strong>
                {" "}
            ravilalahareesh3@gmail.com
            </p>

            </div>

          </div>

        </div>

        {/* Education */}

        <div className="glass p-1 rounded-2 mb-4">

          <h3 className="mb-4">
            Education Timeline
          </h3>

          <div className="timeline">

            <div className="timeline-item">

              <h5>
                Bachelor Degree
              </h5>

              <p>
                B tech in Mechanical Engineering
              </p>

              <small>
                2018 - 2021
              </small>

            </div>

            <div className="timeline-item">

              <h5>Diploma</h5>

              <p>Diploma in Mechanical Engineering</p>

              <small>2015 - 2018</small>
            </div>

            <div className="timeline-item">

              <h5> SSC</h5>

              <p> Secondary Educations</p>

              <small>2014 - 2015</small>

            </div>

          </div>

        </div>

        {/* Experience Highlights */}

        <div className="glass p-1 rounded-2 mb-4">

          <h3>Experience Highlights</h3>

          <ul>

            <li>Developed responsive React applications.</li>

            <li>Created reusable componentsand optimized performance.</li>

            <li>Worked with REST APIs using Axios.</li>
            
            <li>Managed source code using Git and GitHub.</li>
          </ul>

        </div>

      </motion.div>

    </div>
  );
}

export default About;
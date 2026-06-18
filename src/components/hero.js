import { motion } from "framer-motion";
import assets from "../assets/image-1.avif";

import {FaGithub,FaLinkedin,FaDownload} from "react-icons/fa";

function Hero() {

  return (

    <section className="hero">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Hi, I'm
              <span className="gradient">
                {""}Hareesh Ravilala
              </span>
            </motion.h1>

            <h3>ReactJS Developer</h3>

            <p>Building modern web applications with React, Node.js</p>

            <div className="d-flex gap-3">

              {/* <a href="/resume.pdf" className="btn btn-primary">
                <FaDownload />
                Resume
              </a> */}

              <a href="https://github.com/HareeshRavilala" target="_blank"rel="noreferrer">
                <FaGithub size={30} />
              </a>

              <a href="#">
                <FaLinkedin size={30} />
              </a>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img src={assets}alt="Hareesh Ravilala" className="profile-img"/>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
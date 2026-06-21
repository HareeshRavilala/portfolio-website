import { motion } from "framer-motion";
import assets from "../assets/image-3.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-8 text-center text-lg-start">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m
              <span className="gradient"> Hareesh Ravilala</span>
            </motion.h1>

            <h3 className="hero-subtitle">ReactJS Developer</h3>
            <p className="hero-text">
              ReactJS Developer with 4 years of experience building scalable,
              high-performance web applications using ReactJS, JavaScript
              (ES6+), TypeScript, Redux, and REST APIs. Skilled in
              component-based architecture, JWT authentication, performance
              optimization, responsive UI development, and Agile methodologies.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 hero-socials">
              {/* <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a> */}

              {/* <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={30} />
              </a> */}
            </div>
          </div>

          <div className="col-12 col-lg-4 text-center">
            <img
              src={assets}
              alt="Hareesh Ravilala"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
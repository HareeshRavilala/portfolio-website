import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="container py-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="section-title text-center mb-5">
          Contact
        </h1>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="glass p-5 rounded-4 text-center">

              <strong><h3 className="mb-4">Contact Details</h3></strong>

              <p className="mb-4">
                I am actively seeking new opportunities as a ReactJS Developer.
                If you have a suitable role or would like to discuss potential
                opportunities, feel free to contact me via email or phone.
                I look forward to connecting with you.
              </p>

              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaEnvelope className="me-2" />
                <span>ravilalahareesh3@gmail.com</span>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaPhone className="me-2" />
                <span>+91 XXXXXXXXXX</span>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-4">
                <FaMapMarkerAlt className="me-2" />
                <span>Hyderabad, India</span>
              </div>

              <div className="d-flex justify-content-center gap-4">
                <a
                 // href="https://github.com/HareeshRavilala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={28} />
                </a>

                <a
                  //href="https://linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
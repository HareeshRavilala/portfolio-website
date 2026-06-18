import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <div className="container py-5 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="section-title">Contact</h1>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="glass p-4 rounded-4 h-100">
              <h3 className="mb-3">Let's Connect</h3>
              <p>
                I’m always open to discussing new projects, opportunities,
                and collaborations.
              </p>

              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-2" />
                <span>your-email@example.com</span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhone className="me-2" />
                <span>+91 xxxxxxxxxx</span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-2" />
                <span>Hyderabad, India</span>
              </div>

              <div className="d-flex gap-3 mt-4">
                <a
                  href="https://github.com/HareeshRavilala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass p-4 rounded-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control" type="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

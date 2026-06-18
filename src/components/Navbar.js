import { Link, NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <FaCode className="me-2" />
          Hareesh.dev
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/experience">
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <ThemeToggle />
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
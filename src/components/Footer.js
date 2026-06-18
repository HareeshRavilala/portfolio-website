import {
  FaGithub,
  FaLinkedin,
  FaHeart
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container text-center">

        <h4>Hareesh Ravilala</h4>

        <p>ReactJs Developer </p>
          
        <div className="social-icons">

          <a href="https://github.com/HareeshRavilala"target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="#" target="_blank"rel="noreferrer">
            <FaLinkedin size={30} />
          </a>

        </div>

        <hr />

        <p>Made with <FaHeart /> using ReactJS</p>

        <small>© {new Date().getFullYear()} Hareesh Ravilala</small>
      </div>

    </footer>
  );
}

export default Footer;
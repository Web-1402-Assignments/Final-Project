import "./Footer.css";
//import '../../node_modules/ionicons/dist/collection/components/icon/icon.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";

export const Footer = () =>  {
    return (
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaFacebook></FaFacebook>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaTwitter></FaTwitter>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaInstagram></FaInstagram>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://github.com/Web-1402-Assignments/Fitness_Tracker">
              <FaGithub></FaGithub>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaTelegram></FaTelegram>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaWhatsapp></FaWhatsapp>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2023 Fitness Tracker | All Rights Reserved</p>
      </footer>
    );
  };
  
import React from "react";
import { Link } from "react-scroll";
import bg1 from '../assets/bg1.jpeg';

const Header = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <div className="profile-img">
      <img src={bg1} alt="Profile" className="img-fluid rounded-circle" />
      </div>
      <a href="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Muhammad Arbaz</h1>
      </a>
      <div className="social-links text-center">
        <a href="https://www.facebook.com/share/gVDJLQgan7e9PP5x/" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/arbaz.rana/" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/Arbazra" className="github">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/arbaz-rana/" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="about" smooth={true} duration={500}><i className="bi bi-person navicon"></i> Home</Link></li>
          <li><Link to="skills" smooth={true} duration={500}><i className="bi bi-images navicon"></i> Skills</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}><i className="bi bi-images navicon"></i> Portfolio</Link></li>
          <li><Link to="services" smooth={true} duration={500}><i className="bi bi-hdd-stack navicon"></i> Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500}><i className="bi bi-envelope navicon"></i> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

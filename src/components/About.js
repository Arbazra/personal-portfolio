import React, { useEffect } from "react";
import AOS from 'aos';
import profileImage from '../assets/bg1.jpeg';  // Image from 'src/assets'

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Home</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImage} className="img-fluid" alt="Profile of Muhammad Arbaz" />
          </div>
          <div className="col-lg-8 content text-center">
            <h2>Full Stack Web Developer.</h2>
            <p className="fst-italic py-3">
              I'm a web developer with expertise in PHP, Laravel, MySQL, and Bootstrap. I
              specialize in crafting dynamic and user-friendly web applications that blend
              functionality with modern design principles. I thrive on challenges and
              continuously seek to expand my skills and knowledge in web development.
            </p>
            <p className="py-3">
              <a href="../cv/muhammad_arbaz.pdf" download="Muhammad_Arbaz_CV.pdf" className="btn btn-warning">
                Download Muhammad Arbaz's CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

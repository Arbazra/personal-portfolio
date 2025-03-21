import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';  // If you want to use React Router
import p1 from '../assets/p1.PNG';  
import p2 from '../assets/p2.PNG';  
import p3 from '../assets/p3.PNG';  
import p4 from '../assets/p4.PNG';  

const projects = [
  { id: 1, title: "TripInSite", img: p1, details: "/portfolio-details/1" },
  { id: 2, title: "Nomad Travel Nest Club", img: p2, details: "/portfolio-details/2" },
  { id: 3, title: "Tatcaps", img: p3, details: "/portfolio-details/3" },
  { id: 4, title: "Star Automation", img: p4, details: "/portfolio-details/4" },
];

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
              <img src={project.img} className="img-fluid" alt={`Project ${project.title}`} />

                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <Link to={project.details} className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

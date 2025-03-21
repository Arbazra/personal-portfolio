import React from "react";

const services = [
  { icon: "bi-card-checklist", title: "Custom Website", desc: "Build a unique online presence." },
  { icon: "bi-briefcase", title: "Business Website", desc: "Create tailored business websites." },
  { icon: "bi-bar-chart", title: "Ecommerce Websites", desc: "Design online stores." },
  { icon: "bi-binoculars", title: "WordPress", desc: "Develop WordPress solutions." },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
              <div className="icon flex-shrink-0">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div>
                <h4 className="title">{service.title}</h4>
                <p className="description">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

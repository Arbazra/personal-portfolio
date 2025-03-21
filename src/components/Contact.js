import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-telephone"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>03104069847</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>www.arbazrana@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label>Your Name</label>
                  <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label>Your Email</label>
                  <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <label>Subject</label>
                  <input type="text" name="subject" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <label>Message</label>
                  <textarea name="message" rows="5" className="form-control" onChange={handleChange} required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 97 },
    { name: "JavaScript", level: 90 },
    { name: "PHP", level: 95 },
    { name: "CodeIgniter", level: 95 },
    { name: "Laravel", level: 95 },
  ];

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  {skill.name} <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

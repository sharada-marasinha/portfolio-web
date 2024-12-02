import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "",
      period: "2024 May 1st - Present",
      description: []
    },
    {
      title: "Assistant Lecturer",
      company: "Software Engineering Institute",
      period: "Present",
      description: [
        "Subjects Taught: Java, HTML, CSS, JavaScript",
        "Advanced Application Development Support: Spring Boot, Angular, React, Express.js, Node.js",
        "Standalone Application Development Modules: JavaFX, Electron.js"
      ]
    },
    {
      title: "Training Software Engineer",
      company: "Lex-Code X (ICET)",
      period: "October 1st, 2023 to December 1st, 2023",
      description: [
        "Developed an e-commerce website with Spring Boot and Angular",
        "Led agile ceremonies: Sprint Planning, Daily Standups, Sprint Reviews, and Retrospectives",
        "Facilitated cross-functional team collaboration",
        "Collected stakeholder feedback in Product Owner Review meetings",
        "Managed project priorities and dependencies in review meetings"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 cosmic-text">Professional Experience</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="timeline-connector" />
          <div className="experience-particles" />
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="experience-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

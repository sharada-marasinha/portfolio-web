import React from 'react';

interface EducationItem {
  degree: string;
  school: string;
  duration: string;
  location: string;
  description: string[];
  gpa?: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'BSc (Hons) Computer Science (Software Engineering)',
      school: 'Kingston University',
      duration: '2024 - Present',
      location: 'United Kingdom',
      description: [
        'Specializing in Software Engineering',
        'Focus on advanced software development methodologies',
        'Research in modern software architecture patterns',
        'International perspective on software engineering practices'
      ],
      gpa: 'In Progress'
    },
    {
      degree: 'BTEC Higher National Diploma (HND) in Computing',
      school: 'Pearson College London',
      duration: '2024 - 2026',
      location: 'London, UK',
      description: [
        'Major: Computing',
        'Practical approach to computing technologies',
        'Industry-relevant curriculum and projects',
        'Emphasis on real-world problem solving'
      ]
    },
    {
      degree: 'Higher Diploma in Software Engineering',
      school: 'Institute of Computer Engineering Technology (iCET)',
      duration: '2023',
      location: 'Panadura, Sri Lanka',
      description: [
        'Team Leader at LexcodeX Software Team',
        'Comprehensive software engineering training',
        'Hands-on experience with enterprise technologies',
        'Led multiple student software projects'
      ],
      gpa: 'Distinction'
    }
  ];

  return (
    <section id="education" className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-primary to-space-secondary opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="education-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="education-card-content space-card">
                  <div className="education-header">
                    <div className="education-title">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                        {item.degree}
                      </h3>
                      <p className="text-lg text-purple-300">{item.school}</p>
                    </div>
                    <div className="education-meta">
                      <span className="education-duration">{item.duration}</span>
                      <span className="education-location">{item.location}</span>
                      {item.gpa && (
                        <span className="education-gpa">GPA: {item.gpa}</span>
                      )}
                    </div>
                  </div>

                  <div className="education-details">
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="education-detail-item"
                          style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                        >
                          <span className="education-bullet" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Elements */}
                <div className="timeline-dot" />
                {index !== educationData.length - 1 && (
                  <div className="timeline-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

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
      degree: 'BSc (Hons) in Computer Science',
      school: 'University of Colombo School of Computing',
      duration: '2020 - Present',
      location: 'Colombo, Sri Lanka',
      description: [
        'Specializing in Software Engineering',
        'Member of IEEE Student Branch',
        'Active participant in university hackathons and coding competitions',
        'Research focus on AI and Machine Learning applications'
      ],
      gpa: '3.8/4.0'
    },
    {
      degree: 'Advanced Level Education',
      school: 'Rahula College',
      duration: '2017 - 2019',
      location: 'Matara, Sri Lanka',
      description: [
        'Stream: Physical Science',
        'District Rank: Top 10%',
        'Active member of the school\'s IT Society',
        'Participated in national level competitions'
      ]
    }
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      <div className="constellation absolute inset-0" />
      
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

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 orbit-element opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
        <div className="absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20" style={{ animationDelay: '-5s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>
      </div>
    </section>
  );
};

export default Education;

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = {
    phone: "+94 77 9911 825",
    email: "sharadamarasinha@gmail.com",
    location: "Colombo, Sri Lanka",
    links: {
      LinkedIn: "https://www.linkedin.com/in/sharada-marasinha",
      GitHub: "https://github.com/sharada-marasinha",
      W3Schools: "https://www.w3schools.com/users/sharada",
      HackerRank: "https://www.hackerrank.com/sharada",
      StackOverflow: "https://stackoverflow.com/users/sharada",
      "Daily.dev": "https://daily.dev/@sharada"
    }
  };

  const references = [
    {
      name: "Dr. Niroth Samarawickrama",
      title: "Founder, Institute of Computer Engineering Technology",
      location: "Panadura, Sri Lanka",
      phone: "+94 717 640 600"
    },
    {
      name: "Mr. Frank Demiand",
      title: "Snr. Engineering Lead / Manager – CRM at Dialog Axiata PLC",
      phone: "+94 715 829 295"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      <div className="constellation absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities?
            Let's build something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-card p-6">
              <h3 className="text-2xl font-semibold mb-6 cosmic-text">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <span className="mr-4 text-2xl">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <span className="mr-4 text-2xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="mr-4 text-2xl">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-card p-6">
              <h3 className="text-2xl font-semibold mb-6 cosmic-text">Professional Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(contactInfo.links).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-blue-500"
                  >
                    <span className="mr-3">
                      {platform === 'LinkedIn' && '💼'}
                      {platform === 'GitHub' && '🐙'}
                      {platform === 'W3Schools' && '📚'}
                      {platform === 'HackerRank' && '🏆'}
                      {platform === 'StackOverflow' && '❓'}
                      {platform === 'Daily.dev' && '📰'}
                    </span>
                    <span className="text-sm">{platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="space-card p-6">
              <h3 className="text-2xl font-semibold mb-6 cosmic-text">Professional References</h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-blue-400">{ref.name}</h4>
                    <p className="text-gray-300 text-sm">{ref.title}</p>
                    {ref.location && <p className="text-gray-400 text-xs">{ref.location}</p>}
                    <p className="text-gray-400 text-sm">📱 {ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-card p-8">
            <h3 className="text-2xl font-semibold mb-6 cosmic-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cosmic-button primary py-3"
              >
                <span className="button-content">Send Message 🚀</span>
                <div className="button-glowing-bg"></div>
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>💡 This will open your email client with a pre-filled message</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 orbit-element opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20" style={{ animationDelay: '-5s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </section>
  );
};

export default Contact;

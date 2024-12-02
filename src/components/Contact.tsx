import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = {
    phone: "+94-77-9911-825",
    email: "sharadamarasinha@gmail.com",
    location: "Colombo, Sri Lanka",
    links: {
      LinkedIn: "#",
      GitHub: "#",
      HackerRank: "#",
      StackOverflow: "#"
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="mr-3">📱</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📧</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                    {contactInfo.email}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  {contactInfo.location}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(contactInfo.links).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

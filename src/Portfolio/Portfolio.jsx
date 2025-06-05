import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';
import Navbar from '../Components/Nav/Navbar';
import Skills from '../Components/Skill/Skills';
import SpinningLogos from '../Components/SpinningLogos/SpinningLogos';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const form = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_wjrigod', 'template_7ep13mf', form.current, 'F1ydcR8gkFNKDGnyT')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message.');
        }
      );
  };

  const projects = [
    {
      title: 'JobPortal',
      description: 'A MERN stack job portal for posting and applying to jobs, featuring user authentication and job management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop',
      demo: '#',
      code: 'https://github.com/Kazuto0p/Newjob',
    },
    {
      title: 'OLX Clone',
      description: 'A MERN stack clone of the OLX marketplace for buying and selling items with user profiles and listings.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
      demo: '#',
      code: 'https://github.com/Kazuto0p/OLX',
    },
    {
      title: 'Instagram Clone',
      description: 'A MERN stack clone of Instagram with social media features like posting, liking, and commenting.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop',
      demo: '#',
      code: 'https://github.com/Kazuto0p/Instagram-C',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Umamahesh K
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack MERN Developer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting scalable web applications with React, Node.js, and modern cloud technologies
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-semibold"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-600 px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack MERN Developer with expertise in building scalable web applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From frontend interfaces with React and Tailwind CSS to backend systems with Node.js and MongoDB, I handle full development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I deploy apps to AWS and keep everything version-controlled with Git.
                </p>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 absolute inset-0 animate-pulse"></div>
                <img
                  src="/Untitled design (2).png"
                  alt="Umamahesh K"
                  className="w-80 h-80 rounded-full object-cover mx-auto relative z-10 border-4 border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <SpinningLogos />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.demo} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm">
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                      <a href={project.code} className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects or discuss opportunities. Feel free to reach out!
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-xl mx-auto">
              <div>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="mailto:umamahesh@example.com"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={24} className="mr-2" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/umamahesh"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={24} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Kazuto0p"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={24} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

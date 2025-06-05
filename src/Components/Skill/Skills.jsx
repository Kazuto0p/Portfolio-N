import React from 'react';
import { Code, Server, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Tailwind CSS", "HTML5", "CSS", "JavaScript", "Vite"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: ["Node.js", "Express", "Python", "MongoDB", "SQL"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Git"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["VS Code", "npm"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Full-stack expertise with modern technologies and tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-700/50"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>

              {/* Category title */}
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-3 group/skill"
                    style={{ 
                      animationDelay: `${(index * 150) + (skillIndex * 100)}ms`
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover/skill:scale-150 transition-transform duration-300`}></div>
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
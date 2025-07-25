import React from 'react';
import { Globe, Code, Github } from 'lucide-react';
const TechSection = () => {
  const techStack = {
    frontend: ["React 19", "Tailwind CSS", "Zustand", "Socket.io Client", "Vite"],
    backend: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Bcrypt"]
  };

  return (
    <section id="tech" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built With
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Modern Tech</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging the latest technologies to deliver a fast, secure, and scalable chat experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="bg-blue-500 p-2 rounded-lg mr-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              Frontend
            </h3>
            <div className="space-y-3">
              {techStack.frontend.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="bg-green-500 p-2 rounded-lg mr-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              Backend
            </h3>
            <div className="space-y-3">
              {techStack.backend.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all inline-flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>View Source Code</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default TechSection;
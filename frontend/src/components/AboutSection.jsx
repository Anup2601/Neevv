import React from 'react';
import { Code, Heart, Shield, ChevronDown } from 'lucide-react';
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Than Just
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Another Chat App</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Neev was born from the need for a safe space where developers can be themselves. 
              Whether you're looking for a coding partner, want to discuss the latest tech trends, 
              or hoping to find someone special who understands your passion for programming.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We believe that the best connections happen when you can share your authentic self 
              without worrying about data privacy or corporate surveillance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Zero data collection policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Open source and transparent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Built by the community, for the community</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">DevConnect</div>
                    <div className="text-gray-400 text-sm">Hey! Working on React lately?</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">CodeLover</div>
                    <div className="text-gray-400 text-sm">Yes! Want to pair program? ❤️</div>
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm">
                  🔒 End-to-end encrypted • No data stored
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
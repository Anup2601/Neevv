import { BookOpen, Code, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
        <footer className="glass-morphism py-16 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-black gradient-text">NEEV</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                  Empowering the next generation of leaders through revolutionary AI-powered mentorship and exclusive access to global industry titans.
                </p>
                <div className="flex items-center text-blue-400">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>Transforming lives in 50+ countries</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 text-xl">Platform</h3>
                <ul className="space-y-4 text-gray-400">
                  {['AI Mentors', 'Elite Courses', 'Masterclasses', 'Championships'].map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition-colors duration-300 text-lg">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 text-xl">Company</h3>
                <ul className="space-y-4 text-gray-400">
                  {['About', 'Careers', 'Press', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition-colors duration-300 text-lg">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0 text-lg">
                © 2025 Neev. All rights reserved. Building the future of elite education.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Code className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
  )
}
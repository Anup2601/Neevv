import { ArrowUpRight, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden cursor-pointer"
                onClick={() => navigation("/")}>
                <BookOpen className="w-7 h-7 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 animate-pulse"></div>
                </div>
                <span className="text-3xl font-black gradient-text">NEEV</span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                {['Contact', 'About', 'Careers', 'Press'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-all duration-300 relative group text-lg font-medium"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                ))}
                <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold magnetic-button hover:shadow-2xl hover:shadow-blue-500/50 group"
                onClick={()=> {
                  toast.success("Access not available yet!");
                  navigation("/signup");
                }}>
                  <span className="relative z-10">Launch Career</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>

              <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden glass-morphism border-t border-white/10 px-6 py-4">
              {['Features', 'About', 'Mentors', 'Events'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-white/80 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full mt-4 font-semibold"
              onClick={()=> {
                navigation("/signup");
              }}>
                Launch Career
              </button>
            </div>
          )}
        </nav>
    );
}
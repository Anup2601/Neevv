import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  Award, 
  TrendingUp,
  Star,
  ArrowRight,
  Menu,
  X,
  Play,
  Clock,
  Globe,
  Zap
} from 'lucide-react';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: MessageCircle,
      title: "Expert Chat & Talk",
      description: "Connect with industry experts through real-time chat and voice calls for instant guidance",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "Mentoring Sessions",
      description: "Book one-on-one mentoring sessions with experienced professionals in your field",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Access structured learning paths with interactive content and hands-on projects",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Daily Practice Papers",
      description: "Sharpen your skills with curated practice tests and assessments updated daily",
      color: "bg-orange-500"
    },
    {
      icon: Video,
      title: "Learning Reels",
      description: "Bite-sized video content for quick learning and skill development on the go",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Events & Workshops",
      description: "Join live workshops, conferences, and networking events with industry leaders",
      color: "bg-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Competitions",
      description: "Participate in coding challenges, case competitions, and skill-based contests",
      color: "bg-pink-500"
    },
    {
      icon: Award,
      title: "Industry Blogs",
      description: "Stay updated with latest trends through expert-written blogs and insights",
      color: "bg-teal-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "The mentoring sessions completely transformed my career trajectory. The experts here provided invaluable guidance that helped me land my dream job.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "Data Scientist at Microsoft",
      content: "Daily practice papers and expert feedback helped me master complex algorithms. The platform's approach to learning is simply outstanding.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anjali Patel",
      role: "Product Manager at Flipkart",
      content: "From workshops to one-on-one sessions, every feature here adds real value. It's like having a personal career coach available 24/7.",
      rating: 5,
      avatar: "AP"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neev
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
              <a href="#mentors" className="text-gray-700 hover:text-blue-600 transition-colors">Mentors</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              onClick={() => { window.location.href = '/signup'; }}>
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-700">Features</a>
              <a href="#courses" className="block py-2 text-gray-700">Courses</a>
              <a href="#mentors" className="block py-2 text-gray-700">Mentors</a>
              <a href="#events" className="block py-2 text-gray-700">Events</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg mt-2"
              onClick={() => { window.location.href = '/signup'; }}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">Launch Your Career Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Learn, Grow,
              </span>
              <br />
              <span className="text-gray-900">Excel Together</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with industry experts, master new skills through interactive courses, 
              and accelerate your career with personalized mentoring sessions and real-world practice.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center group"
              onClick={() => { window.location.href = '/login'; }}>
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Play className="w-6 h-6 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Weekly Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines expert mentorship, structured learning, and practical experience to accelerate your professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-50 hover:bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Learners Say
          </h2>
          <p className="text-blue-100 mb-12 text-lg">
            Join thousands of professionals who have transformed their careers with Neev
          </p>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are already advancing their careers with expert mentorship and hands-on learning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300">
              Start Your Journey Today
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              Explore Courses
            </button>
          </div>

          <div className="flex items-center justify-center mt-8 text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>Free 7-day trial • No credit card required</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Neev
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Empowering learners worldwide with expert mentorship, comprehensive courses, and practical experience to achieve their career goals.
              </p>
              <div className="flex items-center text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Available worldwide</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Competitions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Neev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
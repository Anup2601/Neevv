import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Send,
  CheckCircle,
  Zap,
  Globe,
  Crown,
  Rocket,
  Brain,
  Target,
  Sparkles,
  Shield,
  ChevronRight,
  Video,
  HeadphonesIcon,
  BookOpen,
  Award,
  CloudLightning
} from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';

// FloatingElement component
function FloatingElement({ children, delay = 0 }) {
  return (
    <div 
      className="animate-fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
}

export default function ContactMain() {
  const [selectedService, setSelectedService] = useState('consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    service: 'consultation',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 'consultation',
      title: 'Elite Strategy Consultation',
      description: 'One-on-one strategic planning session with our leadership team',
      duration: '60 minutes',
      price: '$2,500',
      icon: Crown,
      color: 'from-yellow-400 to-orange-500',
      features: [
        'C-Suite Executive Access',
        'Personalized Growth Roadmap',
        'Industry Intelligence Briefing',
        'Exclusive Network Introduction'
      ]
    },
    {
      id: 'mentorship',
      title: 'Premium Mentorship Program',
      description: 'Exclusive access to Fortune 500 CEOs and industry pioneers',
      duration: '3-12 months',
      price: '$15,000/month',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Billionaire Mentor Matching',
        'Weekly 1:1 Sessions',
        'Board Room Simulations',
        'Global Executive Network'
      ]
    },
    {
      id: 'masterclass',
      title: 'Private Masterclass Series',
      description: 'Invite-only sessions with Nobel laureates and innovators',
      duration: '6-week program',
      price: '$25,000',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Nobel Laureate Instructors',
        'Classified Industry Insights',
        'VR/AR Learning Experience',
        'Global Championship Access'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Transformation',
      description: 'Complete organizational learning ecosystem implementation',
      duration: 'Custom timeline',
      price: 'Custom pricing',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'AI-Powered Learning Platform',
        'Executive Team Training',
        'Custom Content Creation',
        'Performance Analytics Suite'
      ]
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat with Experts',
      description: 'Get instant answers from our elite consultants',
      action: 'Start Chat',
      gradient: 'from-blue-500 to-cyan-500',
      available: true
    },
    {
      icon: Video,
      title: 'Executive Video Call',
      description: 'Schedule a premium consultation call',
      action: 'Book Call',
      gradient: 'from-purple-500 to-pink-500',
      available: true
    },
    {
      icon: Mail,
      title: 'Priority Email Support',
      description: 'Direct line to our leadership team',
      action: 'Send Email',
      gradient: 'from-emerald-500 to-teal-500',
      available: true
    },
    {
      icon: Phone,
      title: 'VIP Hotline',
      description: '24/7 dedicated support for premium members',
      action: 'Call Now',
      gradient: 'from-orange-500 to-red-500',
      available: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVision Corp",
      content: "The consultation session was transformative. Within 30 days, we implemented strategies that increased our valuation by 300%. Worth every penny.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Innovation Officer, BioTech Solutions",
      content: "Neev's mentorship program connected me with industry legends. The insights I gained are literally priceless—changed my entire career trajectory.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Founder, GreenEnergy Inc",
      content: "The enterprise transformation program revolutionized our company culture. Employee performance increased 250% within the first quarter.",
      rating: 5,
      avatar: "ET"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setFormData({
      ...formData,
      service: serviceId
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        service: ''
      });
    }, 5000);
  };

  return (
    <>
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .gradient-text {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-hover:hover {
          transform: translateY(-15px) scale(1.02);
        }
        
        .reveal-animation {
          opacity: 0;
          transform: translateY(50px);
          animation: reveal 1s ease-out forwards;
        }
        
        @keyframes reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-line {
          background: linear-gradient(to bottom, transparent, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, transparent);
          width: 4px;
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>

      <div className="min-h-screen bg-black text-white overflow-hidden relative pt-20">
        {/* Animated background particles */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`,
              }}
            />
          ))}
        </div>
        <Nav />

        {/* Hero Section */}
        <section className="relative py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FloatingElement delay={0.5}>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
                <CloudLightning className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                <span className="text-blue-300 font-medium text-lg">Priority Access • VIP Treatment</span>
              </div>
            </FloatingElement>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
              <span className="gradient-text block">CONNECT WITH</span>
              <span className="text-white block">EXCELLENCE</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              Ready to join the <span className="gradient-text font-semibold">elite circle</span> of high-achievers? 
              Book your exclusive consultation and unlock unprecedented opportunities for transformation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Crown, label: "VIP Members", value: "10K+" },
                { icon: Award, label: "Success Rate", value: "98%" },
                { icon: Clock, label: "Response Time", value: "<2hrs" },
                { icon: Globe, label: "Global Reach", value: "200+" }
              ].map((stat, index) => (
                <FloatingElement key={index} delay={index * 0.1}>
                  <div className="text-center glass-morphism rounded-3xl p-6 card-hover">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-black gradient-text">{stat.value}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Service Selection */}
        <section className="py-24 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-white">CHOOSE YOUR</span>
                <br />
                <span className="gradient-text">TRANSFORMATION</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select the premium service that aligns with your ambitions. Each option is crafted to deliver extraordinary results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <FloatingElement key={service.id} delay={index * 0.1}>
                  <div 
                    className={`service-card glass-morphism rounded-3xl p-8 cursor-pointer border border-white/10 group relative overflow-hidden ${selectedService === service.id ? 'selected ring-2 ring-blue-400' : ''} min-h-[450px] flex flex-col justify-between`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-blue-400 font-semibold">{service.duration}</span>
                        <span className="text-2xl font-black gradient-text">{service.price}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {service.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {selectedService === service.id && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="text-xs text-blue-400 font-semibold mb-2">✨ SELECTED SERVICE</div>
                          {service.features.slice(2).map((feature, i) => (
                            <div key={i} className="flex items-center text-gray-300 text-sm mb-1">
                              <Sparkles className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="gradient-text">CONNECT INSTANTLY</span>
              </h2>
              <p className="text-xl text-gray-400">Choose your preferred way to reach our elite team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <FloatingElement key={index} delay={index * 0.1}>
                  <div className="glass-morphism rounded-3xl p-8 card-hover group relative overflow-hidden border border-white/10 min-h-[350px] flex flex-col justify-between">
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{method.description}</p>
                      
                      <button 
                        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                          method.available 
                            ? `bg-gradient-to-r ${method.gradient} text-white hover:shadow-lg hover:shadow-blue-500/50` 
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!method.available}
                      >
                        {method.action}
                        {method.available ? (
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        ) : (
                          <Shield className="w-4 h-4 ml-2" />
                        )}
                      </button>
                      
                      {!method.available && (
                        <div className="text-xs text-yellow-400 mt-2 text-center">Premium Members Only</div>
                      )}
                    </div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-24 px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="glass-morphism rounded-3xl p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-black mb-6">
                    <span className="gradient-text">BOOK YOUR SESSION</span>
                  </h2>
                  <p className="text-xl text-gray-400">
                    Complete this form and our team will contact you within 2 hours to confirm your exclusive consultation.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Your Role</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        >
                          <option value="" className="bg-gray-800">Select your role</option>
                          <option value="ceo" className="bg-gray-800">CEO/Founder</option>
                          <option value="cto" className="bg-gray-800">CTO/Tech Lead</option>
                          <option value="vp" className="bg-gray-800">VP/Director</option>
                          <option value="manager" className="bg-gray-800">Manager</option>
                          <option value="individual" className="bg-gray-800">Individual Contributor</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Investment Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        >
                          <option value="" className="bg-gray-800">Select budget range</option>
                          <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                          <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                          <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                          <option value="100k-plus" className="bg-gray-800">$100,000+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white font-semibold mb-3 text-lg">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        >
                          <option value="" className="bg-gray-800">When to start?</option>
                          <option value="immediate" className="bg-gray-800">Immediately</option>
                          <option value="1-month" className="bg-gray-800">Within 1 month</option>
                          <option value="3-months" className="bg-gray-800">Within 3 months</option>
                          <option value="planning" className="bg-gray-800">Just planning</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Tell us about your goals *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                        placeholder="Describe your current challenges, goals, and what you hope to achieve through our program. The more specific you are, the better we can tailor our approach to your needs."
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-16 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 group transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Book My Elite Session
                          <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                      
                      <p className="text-gray-400 mt-4 text-sm">
                        By submitting this form, you agree to receive communications from Neev. Your information is secure and will never be shared.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Request Submitted Successfully!</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                      Thank you for your interest in joining our elite network. Our team will review your application and contact you within 2 hours to schedule your exclusive consultation.
                    </p>
                    <div className="flex items-center justify-center text-blue-400">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>Expected response time: Under 2 hours</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">CLIENT</span>
              <br />
              <span className="gradient-text">SUCCESS STORIES</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
              See how our elite consultation services have transformed businesses and careers at the highest level.
            </p>

            <div className="relative">
              <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-white mb-8 font-light italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 animate-pulse"></div>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-400 text-lg">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="gradient-text">FREQUENTLY ASKED</span>
                <br />
                <span className="text-white">QUESTIONS</span>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about our elite consultation services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What makes Neev's consultation different from other services?",
                  answer: "Our consultations are led by C-suite executives from Fortune 500 companies, Nobel laureates, and industry pioneers. We don't just provide advice—we open doors to exclusive networks and opportunities that are typically inaccessible to most professionals."
                },
                {
                  question: "How quickly can I expect to see results?",
                  answer: "Our clients typically see measurable results within 30-90 days. This includes career advancements, business growth, strategic partnerships, and access to previously unreachable opportunities. Our track record shows 98% of clients achieve their primary objectives within 6 months."
                },
                {
                  question: "Is the investment worth it for early-stage professionals?",
                  answer: "Absolutely. Our programs are designed to accelerate your trajectory by 5-10 years. The connections, insights, and strategies you gain often result in ROI that exceeds 10x the initial investment through salary increases, business opportunities, and career advancement."
                },
                {
                  question: "What level of commitment is required?",
                  answer: "We expect full commitment to the process. Our elite mentors and consultants invest significant time and energy in each client. We work exclusively with individuals who are serious about transformation and willing to implement our strategic recommendations."
                },
                {
                  question: "How do you ensure confidentiality?",
                  answer: "All our consultations are protected by strict NDAs. Our mentors and consultants are accustomed to working with high-profile clients and sensitive information. Your privacy and confidentiality are our top priorities."
                }
              ].map((faq, index) => (
                <FloatingElement key={index} delay={index * 0.1}>
                  <div className="glass-morphism rounded-2xl p-8 border border-white/10 card-hover group">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {faq.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FloatingElement>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5 text-green-400 mr-3 animate-pulse" />
                <span className="text-green-300 font-medium">Limited Availability • Priority Booking</span>
              </div>
            </FloatingElement>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-white">YOUR MOMENT</span>
              <br />
              <span className="gradient-text">IS NOW</span>
            </h2>
            
            <p className="text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              The difference between dreaming and achieving is taking action. Every industry leader, every successful entrepreneur, 
              every revolutionary innovator started with a single decision to <span className="gradient-text font-semibold">invest in themselves.</span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 group transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Secure My Consultation
                  <Calendar className="ml-3 w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-white/30 text-white px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-2xl font-semibold group">
                <span className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Speak to Expert
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-400 mb-3" />
                <span className="text-gray-400 text-lg">100% Satisfaction Guarantee</span>
                <span className="text-sm text-gray-500">Risk-free consultation</span>
              </div>
              <div className="flex flex-col items-center">
                <CloudLightning className="w-8 h-8 text-yellow-400 mb-3" />
                <span className="text-gray-400 text-lg">Instant Elite Access</span>
                <span className="text-sm text-gray-500">Connect with industry titans</span>
              </div>
              <div className="flex flex-col items-center">
                <Crown className="w-8 h-8 text-purple-400 mb-3" />
                <span className="text-gray-400 text-lg">Lifetime Network</span>
                <span className="text-sm text-gray-500">Ongoing support & connections</span>
              </div>
            </div>

            <div className="mt-16 p-8 glass-morphism rounded-3xl border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-blue-400 font-semibold text-lg">Limited Time Offer</span>
              </div>
              <p className="text-white text-xl font-semibold mb-2">
                Book this week and receive a complimentary
              </p>
              <p className="text-gray-300 text-lg">
                30-minute follow-up session with our Strategy Director
              </p>
              <div className="text-sm text-gray-400 mt-4">
                *Valued at $1,500 • Available for first 10 bookings this month
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
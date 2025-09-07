import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen,
  Users,
  Target,
  Zap,
  Globe,
  Brain,
  Rocket,
  Award,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Star,
  
  Eye,
  Heart,
  Shield,
  Flame,
  Crown,
  Gem,
  Infinity,
  ChevronDown,
  Play,
  ArrowUpRight,
  Menu,
  X,
  CloudLightning
} from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStat, setCurrentStat] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  

  // Animation setup
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const founders = [
    {
      name: "Dr. Anup Mishra",
      role: "Co-Founder & CEO",
      bio: "Former VP of AI at Google, Stanford PhD in Machine Learning. Led breakthrough projects in neural network optimization and has 15+ years revolutionizing education technology.",
      achievements: ["Google AI Pioneer", "Stanford Fellow", "Forbes 30 Under 30"],
      avatar: "AM",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Prince Sharma",
      role: "Co-Founder & CTO",
      bio: "Ex-Principal Engineer at Tesla, MIT graduate in Computer Science. Architect of autonomous learning systems and holds 12 patents in adaptive AI technologies.",
      achievements: ["MIT Innovation Award", "Tesla Tech Lead", "AI Patent Holder"],
      avatar: "PS",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Shreya Saxena",
      role: "Co-Founder & CPO",
      bio: "Former Head of Product at Meta, Harvard MBA. Expert in scaling products to billions of users and pioneering next-generation user experiences.",
      achievements: ["Meta Product Leader", "Harvard MBA", "Product Visionary"],
      avatar: "RG",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const values = [
    {
      icon: Crown,
      title: "Excellence Beyond Limits",
      description: "We don't just aim high—we redefine what's possible. Every interaction, every course, every mentor connection is crafted to exceed world-class standards.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "Our cutting-edge AI doesn't replace human wisdom—it amplifies it. We create learning experiences that adapt, predict, and evolve with each individual.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Transformative Impact",
      description: "Every success story fuels our mission. We measure our worth not in metrics, but in the life-changing transformations of our community.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Infinity,
      title: "Boundless Growth",
      description: "Learning never stops, and neither do we. We constantly push boundaries, challenge conventions, and create new pathways to greatness.",
      color: "from-green-500 to-cyan-500"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Genesis",
      description: "Three visionaries united by a shared belief: education should unlock human potential, not limit it. Neev was born from late-night discussions at Stanford.",
      icon: Sparkles
    },
    {
      year: "2020",
      title: "AI Breakthrough",
      description: "Our revolutionary adaptive learning algorithm achieved a 400% improvement in knowledge retention. The future of personalized education was here.",
      icon: Brain
    },
    {
      year: "2021",
      title: "Elite Network Launch",
      description: "First Fortune 500 CEO joined as mentor. Within months, we connected learners with industry titans from Tesla, Google, Apple, and beyond.",
      icon: Crown
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Reached 50+ countries. Our AI-powered translation broke language barriers, making world-class mentorship accessible to ambitious minds everywhere.",
      icon: Globe
    },
    {
      year: "2023",
      title: "Quantum Leap",
      description: "Launched VR/AR learning experiences. Students could now walk through Wall Street trading floors and Silicon Valley boardrooms from anywhere.",
      icon: Rocket
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named 'Most Innovative EdTech Platform' by World Economic Forum. Our impact reached 100,000+ professionals across 200+ industries.",
      icon: Award
    }
  ];

  const stats = [
    { number: "500K+", label: "Lives Transformed", icon: Heart },
    { number: "10K+", label: "Industry Leaders", icon: Crown },
    { number: "200+", label: "Countries Served", icon: Globe },
    { number: "95%", label: "Career Advancement Rate", icon: TrendingUp }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation component
  const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
    <div 
      className="floating-element"
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <style jsx>{`
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

      
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated background particles */}
        <div className="fixed inset-0 z-0">
        
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 "></div>
          {[...Array(60)].map((_, i) => (
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

        <Nav  />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 mt-12">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FloatingElement delay={0.5}>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
                <Eye className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                <span className="text-blue-300 font-medium text-lg">Redefining Human Potential Since 2019</span>
              </div>
            </FloatingElement>
            
            <div className={`reveal-animation ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
                <span className="text-white block">WE ARE</span>
                <span className="gradient-text block">NEEV</span>
              </h1>
            </div>
            
            <div className={`reveal-animation ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                Born from a simple yet <span className="gradient-text font-semibold">revolutionary belief</span>: 
                every human has untapped genius waiting to be unleashed. We're not just an education platform—
                <span className="gradient-text font-semibold"> we're architects of transformation.</span>
              </p>
            </div>

            {/* Animated stats */}
            <div className={`reveal-animation grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <FloatingElement key={index} delay={index * 0.1} duration={4}>
                  <div className={`text-center glass-morphism rounded-3xl p-6 card-hover group ${currentStat === index ? 'ring-2 ring-blue-400' : ''}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </FloatingElement>
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/60" />
            </div>
          </div>

          {/* Background geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FloatingElement delay={0.2}>
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-5xl font-black gradient-text">MISSION</h2>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      To democratize access to world-class mentorship and create personalized learning experiences that unlock every individual's unique potential. We believe genius isn't rare—it's just waiting for the right environment to flourish.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-5xl font-black gradient-text">VISION</h2>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      A world where geographical boundaries, economic barriers, and social limitations never again prevent brilliant minds from reaching their full potential. We're building the future where learning is limitless, mentorship is universal, and success is redefined.
                    </p>
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement delay={0.4}>
                <div className="relative">
                  <div className="glass-morphism rounded-3xl p-12 relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5"></div>
                    <div className="relative z-10">
                      <Flame className="w-20 h-20 text-orange-400 mb-8 mx-auto" />
                      <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Impact Philosophy</h3>
                      <blockquote className="text-xl text-gray-300 italic text-center leading-relaxed">
                        "We don't just transfer knowledge—we ignite transformation. Every interaction is designed to spark the fire of curiosity, fuel the engine of ambition, and accelerate the journey toward greatness."
                      </blockquote>
                      <div className="text-center mt-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-white">VISIONARY</span>
                <br />
                <span className="gradient-text">FOUNDERS</span>
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Three minds united by an impossible dream: to revolutionize how humans learn, grow, and achieve greatness in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {founders.map((founder, index) => (
                <FloatingElement key={index} delay={index * 0.2} duration={5}>
                  <div className="group glass-morphism rounded-3xl p-8 card-hover overflow-hidden border border-white/10 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="relative mb-8">
                        <div className={`w-24 h-24 bg-gradient-to-r ${founder.gradient} rounded-3xl flex items-center justify-center text-white font-bold text-3xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          {founder.avatar}
                        </div>
                        <div className={`absolute -inset-2 bg-gradient-to-r ${founder.gradient} rounded-3xl opacity-30 animate-pulse`}></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">{founder.name}</h3>
                      <p className="text-lg text-blue-400 mb-6 text-center font-semibold">{founder.role}</p>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 text-center">{founder.bio}</p>
                      
                      <div className="space-y-2">
                        {founder.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center justify-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-sm text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <span className="gradient-text">CORE VALUES</span>
                <br />
                <span className="text-white">THAT DRIVE US</span>
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                These aren't just words on a wall—they're the DNA of everything we create, every decision we make, and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <FloatingElement key={index} delay={index * 0.15} duration={4}>
                  <div className="group glass-morphism rounded-3xl p-10 card-hover overflow-hidden border border-white/10 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {value.title}
                      </h3>
                      
                      <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-white">OUR</span>
                <br />
                <span className="gradient-text">JOURNEY</span>
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From a Stanford dorm room idea to revolutionizing global education—every milestone shaped our mission to unlock human potential.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 timeline-line h-full"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <FloatingElement key={index} delay={index * 0.1} duration={6}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}>
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"></div>
                      
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                        <div className="glass-morphism rounded-3xl p-8 card-hover border border-white/10 group">
                          <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} group-hover:scale-110 transition-transform duration-300`}>
                            <milestone.icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="text-3xl font-black gradient-text mb-2">{milestone.year}</div>
                          <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                          <p className="text-gray-300 leading-relaxed text-lg">{milestone.description}</p>
                        </div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  </FloatingElement>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FloatingElement>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8">
                <Gem className="w-5 h-5 text-purple-400 mr-3 animate-pulse" />
                <span className="text-purple-300 font-medium">Join the Revolution</span>
              </div>
            </FloatingElement>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-white">READY TO</span>
              <br />
              <span className="gradient-text">TRANSFORM?</span>
            </h2>
            
            <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
              Your journey to extraordinary begins with a single decision. Join thousands of visionaries who've already 
              <span className="gradient-text font-semibold"> unlocked their potential</span> with Neev.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 group transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <Rocket className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-white/30 text-white px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-2xl font-semibold group">
                <span className="flex items-center">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-400 mb-2" />
                <span className="text-gray-400">14-Day Money-Back Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <CloudLightning className="w-8 h-8 text-yellow-400 mb-2" />
                <span className="text-gray-400">Instant Access to Elite Network</span>
              </div>
              <div className="flex flex-col items-center">
                <Crown className="w-8 h-8 text-purple-400 mb-2" />
                <span className="text-gray-400">Lifetime Learning Community</span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
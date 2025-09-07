import { useState, useEffect, useRef } from 'react';
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
  Play,
  Clock,
  Globe,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  Code,
  Rocket,
  Target,
  Brain
} from 'lucide-react';
import toast from 'react-hot-toast';
import Nav from '../components/landing/Nav';
import Footer from '../components/landing/Footer';

export default function Landing() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

 

  // Animation setup
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Expert Chat",
      description: "Connect with industry leaders through intelligent matching and real-time communication",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Calendar,
      title: "Premium Mentoring",
      description: "Exclusive one-on-one sessions with C-suite executives and industry pioneers",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: BookOpen,
      title: "Immersive Learning Paths",
      description: "Interactive courses with AR/VR components and real-world simulations",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: FileText,
      title: "Adaptive Practice System",
      description: "AI-curated challenges that evolve with your skill level and learning pace",
      color: "from-orange-500 to-red-500",
      delay: 0.4
    },
    {
      icon: Video,
      title: "Micro-Learning Reels",
      description: "Bite-sized premium content from Fortune 500 leaders and innovators",
      color: "from-red-500 to-rose-500",
      delay: 0.5
    },
    {
      icon: Users,
      title: "Exclusive Masterclasses",
      description: "Limited-access sessions with Nobel laureates and industry revolutionaries",
      color: "from-indigo-500 to-blue-500",
      delay: 0.6
    },
    {
      icon: TrendingUp,
      title: "Global Championships",
      description: "Compete in international challenges with $100K+ prize pools",
      color: "from-pink-500 to-violet-500",
      delay: 0.7
    },
    {
      icon: Award,
      title: "Intelligence Reports",
      description: "Access exclusive market insights and future trend predictions",
      color: "from-teal-500 to-cyan-500",
      delay: 0.8
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief AI Officer at Tesla",
      content: "Neev's mentorship program connected me with Elon Musk personally. The platform's AI matching system is revolutionary - it's like having a crystal ball for your career trajectory.",
      rating: 5,
      avatar: "PS",
      company: "Tesla"
    },
    {
      name: "Rahul Kumar",
      role: "VP of Engineering at OpenAI",
      content: "The adaptive learning system here predicted my career needs before I even knew them. Within 6 months, I went from senior engineer to VP level. Absolutely mind-blowing.",
      rating: 5,
      avatar: "RK",
      company: "OpenAI"
    },
    {
      name: "Anjali Patel",
      role: "Global Product Director at Meta",
      content: "This isn't just learning - it's career telepathy. The platform's AI understood my potential better than I did and connected me with mentors who transformed my entire worldview.",
      rating: 5,
      avatar: "AP",
      company: "Meta"
    }
  ];

  const stats = [
    { value: "50+", label: "Global Leaders", icon: Users },
    { value: "10+", label: "AI Mentors", icon: Brain },
    { value: "50+", label: "Premium Courses", icon: BookOpen },
    { value: "10+", label: "Weekly Events", icon: Sparkles }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation for hero elements
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
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        .magnetic-button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
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
      `}</style>

    
      
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated background particles */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          {[...Array(50)].map((_, i) => (
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
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 mt-12">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Floating badge */}
            <FloatingElement delay={0.5}>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8 group hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                <span className="text-blue-300 font-medium text-lg">Redefining Professional Excellence</span>
                <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </FloatingElement>
            
            {/* Main headline with reveal animation */}
            <div className={`reveal-animation ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
                <span className="gradient-text block">ELEVATE</span>
                <span className="text-white block">YOUR</span>
                <span className="gradient-text block">FUTURE</span>
              </h1>
            </div>
            
            <div className={`reveal-animation ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Join the <span className="gradient-text font-semibold">world's most exclusive</span> learning ecosystem. 
                Connect with billionaire mentors, access classified industry intelligence, and transform into an unstoppable force.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={`reveal-animation flex flex-col md:flex-row items-center justify-center gap-6 mb-16 ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.6s' }}>
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-12 py-5 rounded-full text-xl font-bold magnetic-button hover:shadow-2xl hover:shadow-purple-500/50 group"
              onClick={()=> {
                toast.error("Access not available yet!");
                navigation.navigate("/signup");
              }}>
                <span className="relative z-10 flex items-center">
                  Access Elite Network
                  <Rocket className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="flex items-center text-white border border-white/30 px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300 group text-xl font-semibold" onClick={()=> toast.error("Demo not available yet!")}>
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Experience Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className={`reveal-animation grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.8s' }}>
              {stats.map((stat, index) => (
                <FloatingElement key={index} delay={index * 0.1} duration={4}>
                  <div className="text-center glass-morphism rounded-3xl p-6 card-hover group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </FloatingElement>
              ))}
            </div>

            {/* Scroll indicator */}
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

        {/* Features Section */}
        <section ref={featuresRef} id="features" className="py-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <span className="gradient-text">QUANTUM LEAP</span>
                <br />
                <span className="text-white">CAPABILITIES</span>
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered ecosystem doesn't just teach—it predicts, adapts, and evolves with your ambitions. 
                Experience learning that's lightyears ahead of traditional education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FloatingElement key={index} delay={feature.delay} duration={5}>
                  <div className="group relative glass-morphism rounded-3xl p-8 card-hover overflow-hidden border border-white/10">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/50 transition-colors duration-500"></div>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">SUCCESS</span>
              <br />
              <span className="gradient-text">STORIES</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
              From Fortune 500 executives to unicorn founders—discover how Neev transforms careers at the highest level.
            </p>

            <div className="relative">
              <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto border border-white/10 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5"></div>
                
                <div className="relative z-10">
                  {/* Rating stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <blockquote className="text-2xl md:text-3xl text-white mb-8 font-light italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  {/* Author info */}
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
                      <div className="text-blue-400 font-semibold text-lg">{testimonials[currentTestimonial].company}</div>
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

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FloatingElement>
              <div className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5 text-green-400 mr-3 animate-pulse" />
                <span className="text-green-300 font-medium">Limited Access • By Invitation Only</span>
              </div>
            </FloatingElement>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="text-white">READY TO</span>
              <br />
              <span className="gradient-text">DOMINATE?</span>
            </h2>
            
            <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
              Join the exclusive circle of high-achievers who don't just follow trends—they create them.
              Your transformation starts with a single click.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold magnetic-button hover:shadow-2xl hover:shadow-purple-500/50 group">
                <span className="relative z-10 flex items-center"
                onClick={()=> {
                  toast.error("Access not available yet!");
                  navigation.navigate("/signup");
                }}>
                  Claim Your Spot
                  <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-white/30 text-white px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-2xl font-semibold"
              onClick={()=> {
                toast.error("Access not available yet!");
                navigation.navigate("/signup");
              }}>
                Explore Elite Courses
              </button>
            </div>

            <div className="flex items-center justify-center text-gray-500 text-lg">
              <Clock className="w-5 h-5 mr-3" />
              <span>Exclusive 14-day trial • Zero commitment • Full access</span>
            </div>
          </div>
        </section>
<Footer />
        
      </div>
    </>
  );
}
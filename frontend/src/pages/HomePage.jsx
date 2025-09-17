import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Briefcase,
  Trophy,
  Users,
  Code,
  GraduationCap,
  DollarSign,
  Calendar,
  Wrench,
  Video,
  BookOpenCheck,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Target,
  ChevronRight,
  Play,
  Clock,
  MapPin,
  Heart
} from 'lucide-react';
import { Companies } from '../components/Companies';

const HomePage = ({data}) => {
  const { authUser } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState(data ? data : '');

 
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    toast.success(`Exploring ${item}`, {
      duration: 1000,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchQuery}`);
      toast.success(`Searching for: ${searchQuery}`, {
        duration: 2000,
      });
    } else {
      toast.error('Please enter a search term');
    }
  };

  const featuredSections = [
    {
      title: 'Internships',
      icon: Briefcase,
      description: 'Launch your career with top companies',
      count: '2,500+',
      path: '/internships'
    },
    {
      title: 'Jobs',
      icon: GraduationCap,
      description: 'Find your dream job opportunities',
      count: '5,200+',
      path: '/jobs'
    },
    {
      title: 'Competitions',
      icon: Trophy,
      description: 'Compete and showcase your skills',
      count: '180+',
      path: '/competitions'
    },
    {
      title: 'Mentors',
      icon: Users,
      description: 'Learn from industry experts',
      count: '850+',
      path: '/mentors'
    },
    {
      title: 'Practice',
      icon: Code,
      description: 'Sharpen your coding skills',
      count: '10,000+',
      path: '/practice'
    },
    {
      title: 'Courses',
      icon: BookOpenCheck,
      description: 'Master new technologies',
      count: '1,200+',
      path: '/courses'
    }
  ];

  const quickActions = [
    { name: 'Scholarships', icon: DollarSign, path: '/scholarships' },
    { name: 'Cultural Events', icon: Calendar, path: '/cultural-events' },
    { name: 'Workshops', icon: Wrench, path: '/workshops' },
    { name: 'Conferences', icon: Video, path: '/conferences' },
    { name: 'Blog', icon: BookOpen, path: '/blog' }
  ];

  const trendingOpportunities = [
    {
      title: 'Google Summer of Code 2025',
      type: 'Competition',
      deadline: '2 days left',
      participants: '15,000+',
      icon: Trophy
    },
    {
      title: 'Microsoft SDE Internship',
      type: 'Internship',
      deadline: '1 week left',
      participants: '5,000+',
      icon: Briefcase
    },
    {
      title: 'Full Stack Developer',
      type: 'Job',
      deadline: '3 days left',
      participants: '2,500+',
      icon: GraduationCap
    },
    {
      title: 'AI/ML Bootcamp',
      type: 'Course',
      deadline: 'Starting Soon',
      participants: '800+',
      icon: BookOpenCheck
    }
  ];

  return (
  <div className="min-h-screen bg-base-100 border-b border-base-300 overflow-x-hidden">
    <div className="relative z-30 lg:pt-20 pb-12 min-w-10">

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 text-center">
        <div className="max-w-10xl mx-auto space-y-8">
          {/* Welcome Message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-base-content leading-tight">
              Welcome{authUser?.fullName ?`, ${authUser.fullName.split(' ')[0]}` : 'to Neev'}
            </h1>
            <p className="text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto">
              Your gateway to unlimited opportunities in internships, jobs, competitions, and learning experiences
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="w-6 h-6 text-base-content/60 z-10" />
              </div>
              <input
                type="text"
                placeholder="Search internships, jobs, competitions, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-lg w-full pl-16 pr-32 rounded-full bg-base-200/50 backdrop-blur-sm border border-base-300 text-base-content placeholder-base-content/60 focus:bg-base-200 focus:border-primary transition-all duration-300"
              />
              <button
                type="submit"
                className="btn btn-primary absolute right-2 top-2 bottom-2 rounded-full hover:btn-primary-focus transition-all duration-300 font-semibold"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-base-content/70">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span>50,000+ Opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-info" />
              <span>25,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-warning" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>
      <Companies/>

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-base-content mb-4">Explore Opportunities</h2>
          <p className="text-xl text-base-content/70">Discover your next big break</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSections.map((section, index) => (
            <Link
              key={index}
              to={section.path}
              onClick={() => handleNavClick(section.title)}
              className="card bg-base-200/50 backdrop-blur-sm border border-base-300 hover:bg-base-200 transition-all duration-300 transform hover:scale-105  hover:shadow-xl cursor-pointer group  "
            >
              <div className="card-body p-8">
                <div className={`absolute top-0 right-0 size-32 bg-gradient-to-br ${section.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <section.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="badge badge-primary badge-lg">{section.count}</div>
                  </div>
                  <h3 className="card-title text-2xl text-base-content mb-2">{section.title}</h3>
                  <p className="text-base-content/70 mb-4">{section.description}</p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="mr-2 font-semibold">Explore now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-base-content mb-4">Quick Actions</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              onClick={() => handleNavClick(action.name)}
              className="btn btn-lg btn-outline btn-primary rounded-full hover:btn-primary transition-all duration-300 gap-3"
            >
              <action.icon className="w-5 h-5" />
              {action.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Opportunities */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-base-content mb-4">🔥 Trending Now</h3>
          <p className="text-xl text-base-content/70">Don't miss these hot opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trendingOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="card bg-base-200/50 backdrop-blur-sm border border-base-300 hover:bg-base-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleNavClick(opportunity.title)}
            >
              <div className="card-body p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-primary/10 text-primary rounded-lg w-12">
                        <opportunity.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="card-title text-lg text-base-content">{opportunity.title}</h4>
                      <div className="badge badge-secondary badge-sm">{opportunity.type}</div>
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm btn-circle hover:text-error">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between text-sm text-base-content/70 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-warning" />
                    <span>{opportunity.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-info" />
                    <span>{opportunity.participants}</span>
                  </div>
                </div>
                
                <div className="card-actions justify-between items-center">
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform font-semibold">
                    <span className="mr-2">View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="badge badge-accent badge-outline">Hot</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-base-content">Ready to Transform Your Career?</h2>
            <p className="text-xl text-base-content/70">
              Join thousands of students and professionals who have found their dream opportunities through Neev
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/internships"
              onClick={() => handleNavClick('Get Started')}
              className="btn btn-lg btn-primary rounded-full font-semibold px-8 transition-all duration-300 transform hover:scale-105 hover:btn-primary-focus gap-2"
            >
              <Zap className="w-5 h-5" />
              Get Started Now
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavClick('Learn More')}
              className="btn btn-lg btn-outline btn-primary rounded-full px-8 transition-all duration-300 gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="divider divider-primary">Trusted Platform</div>
          <div className="flex flex-wrap justify-center gap-8 text-base-content/60">
            <div className="flex items-center gap-2 hover:text-success transition-colors">
              <Target className="w-5 h-5" />
              <span className="font-medium">Trusted by top companies</span>
            </div>
            <div className="flex items-center gap-2 hover:text-warning transition-colors">
              <Award className="w-5 h-5" />
              <span className="font-medium">Industry recognized</span>
            </div>
            <div className="flex items-center gap-2 hover:text-info transition-colors">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Global opportunities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

};

export default HomePage;
import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
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

const HomePage = () => {
  const { authUser } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (item) => {
    toast.success(`Exploring ${item}`, {
      duration: 2000,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`, {
        icon: '🔍',
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
      color: 'from-blue-500 to-cyan-500',
      path: '/internships'
    },
    {
      title: 'Jobs',
      icon: GraduationCap,
      description: 'Find your dream job opportunities',
      count: '5,200+',
      color: 'from-green-500 to-emerald-500',
      path: '/jobs'
    },
    {
      title: 'Competitions',
      icon: Trophy,
      description: 'Compete and showcase your skills',
      count: '180+',
      color: 'from-yellow-500 to-orange-500',
      path: '/competitions'
    },
    {
      title: 'Mentors',
      icon: Users,
      description: 'Learn from industry experts',
      count: '850+',
      color: 'from-purple-500 to-pink-500',
      path: '/mentors'
    },
    {
      title: 'Practice',
      icon: Code,
      description: 'Sharpen your coding skills',
      count: '10,000+',
      color: 'from-indigo-500 to-blue-500',
      path: '/practice'
    },
    {
      title: 'Courses',
      icon: BookOpenCheck,
      description: 'Master new technologies',
      count: '1,200+',
      color: 'from-red-500 to-rose-500',
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
    <div className='min-h-screen bg-gradient-to-br from-primary to-primary relative overflow-hidden'>

      <div className='relative z-30 pt-20 pb-12'>
        {/* Hero Section */}
        <section className='container mx-auto px-4 py-12 text-center'>
          <div className='max-w-4xl mx-auto space-y-8'>
            {/* Welcome Message */}
            <div className='space-y-4'>
              <h1 className='text-6xl md:text-7xl font-bold text-base-100 leading-tight'>
                Welcome {authUser?.fullName ? `back, ${authUser.fullName.split(' ')[0]}` : 'to Neev'}
              </h1>
              <p className='text-xl md:text-2xl text-base-100/90 max-w-3xl mx-auto'>
                Your gateway to unlimited opportunities in internships, jobs, competitions, and learning experiences
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className='max-w-2xl mx-auto'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none'>
                  <Search className='w-6 h-6 text-base-100/60'/>
                </div>
                <input
                  type='text'
                  placeholder='Search internships, jobs, competitions, courses...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-16 pr-6 py-4 text-lg rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 placeholder-base-100/60 focus:bg-base-100/30 focus:border-base-100/50 transition-all duration-300'
                />
                <button 
                  type='submit'
                  className='absolute right-2 top-2 bottom-2 px-6 bg-base-100 text-primary rounded-full hover:bg-base-100/90 transition-all duration-300 font-semibold'
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className='flex flex-wrap justify-center gap-8 text-base-100/90'>
              <div className='flex items-center gap-2'>
                <TrendingUp className='w-5 h-5'/>
                <span>50,000+ Opportunities</span>
              </div>
              <div className='flex items-center gap-2'>
                <Users className='w-5 h-5'/>
                <span>25,000+ Active Users</span>
              </div>
              <div className='flex items-center gap-2'>
                <Award className='w-5 h-5'/>
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections Grid */}
        <section className='container mx-auto px-4 py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-base-100 mb-4'>Explore Opportunities</h2>
            <p className='text-xl text-base-100/80'>Discover your next big break</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredSections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                onClick={() => handleNavClick(section.title)}
                className='group relative overflow-hidden rounded-2xl bg-base-100/20 backdrop-blur-sm border border-base-100/30 p-8 hover:bg-base-100/30 transition-all duration-300 transform hover:scale-105'
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.color} opacity-20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-300`}></div>
                
                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-4'>
                    <section.icon className='w-8 h-8 text-base-100' />
                    <span className='text-base-100/80 font-semibold'>{section.count}</span>
                  </div>
                  
                  <h3 className='text-2xl font-bold text-base-100 mb-2'>{section.title}</h3>
                  <p className='text-base-100/80 mb-4'>{section.description}</p>
                  
                  <div className='flex items-center text-base-100 group-hover:translate-x-2 transition-transform'>
                    <span className='mr-2'>Explore now</span>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className='container mx-auto px-4 py-12'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold text-base-100 mb-4'>Quick Actions</h3>
          </div>
          
          <div className='flex flex-wrap justify-center gap-4'>
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                onClick={() => handleNavClick(action.name)}
                className='btn btn-lg rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 hover:bg-base-100/30 transition-all duration-300 gap-3'
              >
                <action.icon className='w-5 h-5' />
                {action.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Opportunities */}
        <section className='container mx-auto px-4 py-12'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-base-100 mb-4'>🔥 Trending Now</h3>
            <p className='text-xl text-base-100/80'>Don't miss these hot opportunities</p>
          </div>

          <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {trendingOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className='bg-base-100/20 backdrop-blur-sm border border-base-100/30 rounded-xl p-6 hover:bg-base-100/30 transition-all duration-300 cursor-pointer group'
                onClick={() => handleNavClick(opportunity.title)}
              >
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-base-100/20 rounded-lg'>
                      <opportunity.icon className='w-5 h-5 text-base-100' />
                    </div>
                    <div>
                      <h4 className='font-bold text-base-100 text-lg'>{opportunity.title}</h4>
                      <span className='text-base-100/70 text-sm'>{opportunity.type}</span>
                    </div>
                  </div>
                  <Heart className='w-5 h-5 text-base-100/60 hover:text-red-400 transition-colors cursor-pointer' />
                </div>

                <div className='flex items-center justify-between text-sm text-base-100/80'>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4' />
                    <span>{opportunity.deadline}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='w-4 h-4' />
                    <span>{opportunity.participants}</span>
                  </div>
                </div>

                <div className='mt-4 flex items-center text-base-100 group-hover:translate-x-2 transition-transform'>
                  <span className='mr-2'>View Details</span>
                  <ChevronRight className='w-4 h-4' />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className='container mx-auto px-4 py-12 text-center'>
          <div className='max-w-3xl mx-auto space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-4xl font-bold text-base-100'>Ready to Transform Your Career?</h2>
              <p className='text-xl text-base-100/90'>
                Join thousands of students and professionals who have found their dream opportunities through Neev
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/internships'
                onClick={() => handleNavClick('Get Started')}
                className='btn btn-lg rounded-full bg-base-100 text-primary hover:bg-base-100/90 border-none font-semibold px-8 transition-all duration-300 transform hover:scale-105'
              >
                <Zap className='w-5 h-5 mr-2' />
                Get Started Now
              </Link>
              
              <Link
                to='/about'
                onClick={() => handleNavClick('Learn More')}
                className='btn btn-lg rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 hover:bg-base-100/30 px-8 transition-all duration-300'
              >
                <Play className='w-5 h-5 mr-2' />
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className='flex flex-wrap justify-center gap-6 pt-8 text-base-100/70'>
              <div className='flex items-center gap-2'>
                <Target className='w-4 h-4' />
                <span>Trusted by top companies</span>
              </div>
              <div className='flex items-center gap-2'>
                <Award className='w-4 h-4' />
                <span>Industry recognized</span>
              </div>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                <span>Global opportunities</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { 
  BookOpen, 
  Code, 
  TrendingUp, 
  Star, 
  Play, 
  Clock, 
  Users, 
  Award,
  Briefcase,
  Brain,
  Database,
  Globe,
  Calculator,
  MessageSquare,
  Zap,
  Target,
  ChevronRight,
  Filter,
  Search
} from 'lucide-react';

import ML from "../assets/AI_ML.jpg"
import Cloud from "../assets/cloud-computing.jpg"
import Data_Science from "../assets/Data_Science.jpg"
import Security from "../assets/Cyber_Security.jpg"
import React4 from "../assets/react.jpg"
import Node from "../assets/node.jpg"
import UI_UX from "../assets/language_management_mobile.png"
import JavaScript from "../assets/JavaScript.webp"
// import Database from "../assets/Data_Analytics.jpg"
// import C from "../assets/Git.jpg"


const CoursesPage = () => {
  const [activeFilters, setActiveFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data
  const coursesData = {
    trending: [
      { id: 1, title: "AI & Machine Learning", category: "ai", students: "45K+", rating: 4.8, image: ML, instructor: "Dr. Sarah Chen", duration: "12 weeks", level: "Intermediate" },
      { id: 2, title: "Cloud Computing AWS", category: "cloud", students: "38K+", rating: 4.7, image: Cloud, instructor: "Mike Johnson", duration: "8 weeks", level: "Beginner" },
      { id: 3, title: "Data Science with Python", category: "data", students: "52K+", rating: 4.9, image: Data_Science, instructor: "Prof. Lisa Wang", duration: "16 weeks", level: "Advanced" },
      { id: 4, title: "Cybersecurity Fundamentals", category: "security", students: "29K+", rating: 4.6, image: Security, instructor: "John Smith", duration: "10 weeks", level: "Beginner" },
    ],
    recommended: [
      { id: 5, title: "React.js Complete Guide", category: "frontend", students: "34K+", rating: 4.8, image: React4, instructor: "Alex Rivera", duration: "14 weeks", level: "Intermediate" },
      { id: 6, title: "Node.js Backend Development", category: "backend", students: "28K+", rating: 4.7, image: Node, instructor: "Emma Brown", duration: "12 weeks", level: "Intermediate" },
      { id: 7, title: "UI/UX Design Mastery", category: "design", students: "41K+", rating: 4.9, image: UI_UX, instructor: "David Lee", duration: "10 weeks", level: "Beginner" }
    ],
    continue: [
      { id: 8, title: "JavaScript Advanced Concepts", progress: 65, category: "javascript", students: "23K+", rating: 4.7, image: JavaScript, instructor: "Carlos Martinez", duration: "8 weeks", level: "Advanced" },
      { id: 9, title: "Database Design & SQL", progress: 40, category: "database", students: "31K+", rating: 4.6, image: Database, instructor: "Rachel Green", duration: "6 weeks", level: "Intermediate" }
    ],
    tools: [
      { id: 10, title: "Git & GitHub Mastery", category: "git", students: "67K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Tom Wilson", duration: "4 weeks", level: "Beginner" },
      { id: 11, title: "Docker Containerization", category: "docker", students: "25K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Anna Schmidt", duration: "6 weeks", level: "Intermediate" },
      { id: 12, title: "VS Code Power User", category: "vscode", students: "43K+", rating: 4.6, image: "/api/placeholder/300/200", instructor: "Mark Johnson", duration: "3 weeks", level: "Beginner" }
    ],
    coding: [
      { id: 13, title: "C++ Programming Complete", category: "cpp", students: "54K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Dr. Robert Kim", duration: "20 weeks", level: "Beginner" },
      { id: 14, title: "Java Enterprise Development", category: "java", students: "48K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Jennifer Davis", duration: "18 weeks", level: "Intermediate" },
      { id: 15, title: "Python for Everyone", category: "python", students: "72K+", rating: 4.9, image: "/api/placeholder/300/200", instructor: "Michael Chen", duration: "16 weeks", level: "Beginner" },
      { id: 16, title: "C Programming Fundamentals", category: "c", students: "39K+", rating: 4.6, image: "/api/placeholder/300/200", instructor: "Sarah Johnson", duration: "14 weeks", level: "Beginner" }
    ],
    aptitude: [
      { id: 17, title: "Quantitative Aptitude", category: "quant", students: "28K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Dr. Priya Sharma", duration: "8 weeks", level: "Intermediate" },
      { id: 18, title: "Logical Reasoning", category: "reasoning", students: "35K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Rahul Gupta", duration: "6 weeks", level: "Beginner" },
      { id: 19, title: "Verbal Ability", category: "verbal", students: "31K+", rating: 4.6, image: "/api/placeholder/300/200", instructor: "Meera Patel", duration: "10 weeks", level: "Intermediate" }
    ],
    fullstack: [
      { id: 20, title: "MERN Stack Development", category: "mern", students: "43K+", rating: 4.9, image: "/api/placeholder/300/200", instructor: "Alex Thompson", duration: "24 weeks", level: "Advanced" },
      { id: 21, title: "MEAN Stack Complete", category: "mean", students: "26K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Lisa Rodriguez", duration: "22 weeks", level: "Advanced" },
      { id: 22, title: "Django Full Stack", category: "django", students: "31K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Chris Wilson", duration: "20 weeks", level: "Intermediate" }
    ],
    subjects: [
      { id: 23, title: "Data Structures & Algorithms", category: "dsa", students: "58K+", rating: 4.9, image: "/api/placeholder/300/200", instructor: "Dr. Alan Turing", duration: "16 weeks", level: "Intermediate" },
      { id: 24, title: "Operating Systems", category: "os", students: "34K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Prof. Ken Thompson", duration: "12 weeks", level: "Advanced" },
      { id: 25, title: "Computer Networks", category: "networks", students: "29K+", rating: 4.6, image: "/api/placeholder/300/200", instructor: "Vint Cerf", duration: "14 weeks", level: "Intermediate" }
    ],
    interview: [
      { id: 26, title: "System Design Interview", category: "system", students: "37K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Martin Fowler", duration: "10 weeks", level: "Advanced" },
      { id: 27, title: "Coding Interview Prep", category: "coding", students: "51K+", rating: 4.9, image: "/api/placeholder/300/200", instructor: "Gayle McDowell", duration: "12 weeks", level: "Intermediate" },
      { id: 28, title: "Behavioral Interviews", category: "behavioral", students: "23K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Amy Cuddy", duration: "6 weeks", level: "Beginner" }
    ],
    management: [
      { id: 29, title: "Product Management", category: "product", students: "32K+", rating: 4.8, image: "/api/placeholder/300/200", instructor: "Marty Cagan", duration: "14 weeks", level: "Intermediate" },
      { id: 30, title: "Agile & Scrum", category: "agile", students: "45K+", rating: 4.7, image: "/api/placeholder/300/200", instructor: "Jeff Sutherland", duration: "8 weeks", level: "Beginner" },
      { id: 31, title: "Leadership Skills", category: "leadership", students: "38K+", rating: 4.9, image: "/api/placeholder/300/200", instructor: "Simon Sinek", duration: "10 weeks", level: "Intermediate" }
    ]
  };

  // Filter options for each section
  const filterOptions = {
    trending: ['ai', 'cloud', 'data', 'security'],
    recommended: ['frontend', 'backend', 'design'],
    continue: ['javascript', 'database'],
    tools: ['git', 'docker', 'vscode'],
    coding: ['c', 'cpp', 'java', 'python'],
    aptitude: ['quant', 'reasoning', 'verbal'],
    fullstack: ['mern', 'mean', 'django'],
    subjects: ['dsa', 'os', 'networks'],
    interview: ['system', 'coding', 'behavioral'],
    management: ['product', 'agile', 'leadership']
  };

  const handleFilterChange = (section, filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [section]: prev[section] === filter ? null : filter
    }));
  };

  const getFilteredCourses = (courses, section) => {
    const activeFilter = activeFilters[section];
    if (!activeFilter) return courses;
    return courses.filter(course => course.category === activeFilter);
  };

  const CourseCard = ({ course, showProgress = false }) => (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300">
      <figure className="relative">
        <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
        <div className="absolute top-2 right-2">
          <div className="badge badge-primary gap-1">
            <Star className="w-3 h-3" />
            {course.rating}
          </div>
        </div>
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-lg">{course.title}</h3>
        <p className="text-base-content/70 text-sm mb-2">by {course.instructor}</p>
        
        {showProgress && (
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <progress className="progress progress-primary w-full" value={course.progress} max="100"></progress>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-base-content/60 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="badge badge-outline">{course.level}</div>
          <button className="btn btn-primary btn-sm">
            <Play className="w-4 h-4 mr-1" />
            {showProgress ? 'Continue' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-base-content/70">{subtitle}</p>}
      </div>
    </div>
  );

  const FilterButtons = ({ section, options }) => (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        className={`btn btn-sm ${!activeFilters[section] ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => setActiveFilters(prev => ({ ...prev, [section]: null }))}
      >
        All
      </button>
      {options.map(option => (
        <button
          key={option}
          className={`btn btn-sm ${activeFilters[section] === option ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => handleFilterChange(section, option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-base-100 border-b border-base-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Explore Courses</h1>
              <p className="text-base-content/70 text-lg">Discover your next skill with our comprehensive course catalog</p>
            </div>
            <div className="form-control">
              <div className="input-group">
                <span className="bg-base-200">
                  {/* <Search className="w-5 h-5" /> */}
                </span>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="input input-bordered w-full max-w-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Trending Domains */}
        <section className="mb-16">
          <SectionHeader 
            icon={TrendingUp} 
            title="Trending Domains" 
            subtitle="Most popular courses right now"
          />
          <FilterButtons section="trending" options={filterOptions.trending} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.trending, 'trending').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section className="mb-16">
          <SectionHeader 
            icon={Star} 
            title="Recommended Courses for You" 
            subtitle="Based on your interests and activity"
          />
          <FilterButtons section="recommended" options={filterOptions.recommended} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.recommended, 'recommended').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Continue Where You Left Off */}
        <section className="mb-16">
          <SectionHeader 
            icon={Play} 
            title="Continue Where You Left Off" 
            subtitle="Pick up where you stopped"
          />
          <FilterButtons section="continue" options={filterOptions.continue} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.continue, 'continue').map(course => (
              <CourseCard key={course.id} course={course} showProgress={true} />
            ))}
          </div>
        </section>

        {/* Software Tools */}
        <section className="mb-16">
          <SectionHeader 
            icon={Zap} 
            title="Software Tools" 
            subtitle="Master the tools that power modern development"
          />
          <FilterButtons section="tools" options={filterOptions.tools} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.tools, 'tools').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Coding */}
        <section className="mb-16">
          <SectionHeader 
            icon={Code} 
            title="Coding" 
            subtitle="Programming languages and frameworks"
          />
          <FilterButtons section="coding" options={filterOptions.coding} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.coding, 'coding').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Aptitude */}
        <section className="mb-16">
          <SectionHeader 
            icon={Calculator} 
            title="Aptitude" 
            subtitle="Sharpen your problem-solving skills"
          />
          <FilterButtons section="aptitude" options={filterOptions.aptitude} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.aptitude, 'aptitude').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Full Stack Web Development */}
        <section className="mb-16">
          <SectionHeader 
            icon={Globe} 
            title="Full Stack Web Development" 
            subtitle="Complete web development stacks"
          />
          <FilterButtons section="fullstack" options={filterOptions.fullstack} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.fullstack, 'fullstack').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-16">
          <SectionHeader 
            icon={BookOpen} 
            title="Subjects" 
            subtitle="Core computer science subjects"
          />
          <FilterButtons section="subjects" options={filterOptions.subjects} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.subjects, 'subjects').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Interview Plus */}
        <section className="mb-16">
          <SectionHeader 
            icon={Target} 
            title="Interview Plus" 
            subtitle="Ace your technical interviews"
          />
          <FilterButtons section="interview" options={filterOptions.interview} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.interview, 'interview').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Management */}
        <section className="mb-16">
          <SectionHeader 
            icon={Briefcase} 
            title="Management" 
            subtitle="Leadership and project management skills"
          />
          <FilterButtons section="management" options={filterOptions.management} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredCourses(coursesData.management, 'management').map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
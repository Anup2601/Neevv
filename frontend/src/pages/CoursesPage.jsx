import { useState } from "react";
import {
  BookOpen, Code, TrendingUp, Star, Play,
  Briefcase, Globe, Calculator, Target, Zap
} from "lucide-react";

import coursesData from "../data/coursesData";
import filterOptions from "../data/filterOptions";
import SearchHeader from "../components/courses/SearchHeader";
import FilterSection from "../components/courses/FilterSection";

const sectionsConfig = [
  { key: "trending", title: "Trending Domains", subtitle: "Most popular courses right now", icon: TrendingUp },
  { key: "recommended", title: "Recommended Courses for You", subtitle: "Based on your interests and activity", icon: Star }, 
  { key: "tools", title: "Software Tools", subtitle: "Master the tools that power modern development", icon: Zap },
  { key: "coding", title: "Coding", subtitle: "Programming languages and frameworks", icon: Code },
  { key: "aptitude", title: "Aptitude", subtitle: "Sharpen your problem-solving skills", icon: Calculator },
  { key: "fullstack", title: "Full Stack Web Development", subtitle: "Complete web development stacks", icon: Globe },
  { key: "subjects", title: "Subjects", subtitle: "Core computer science subjects", icon: BookOpen },
  { key: "interview", title: "Interview Plus", subtitle: "Ace your technical interviews", icon: Target },
  { key: "management", title: "Management", subtitle: "Leadership and project management skills", icon: Briefcase }
];

const CoursesPage = () => {
  const [activeFilters, setActiveFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isEducator, setIsEducator] = useState(true);

  const handleSearch = (e) => e.preventDefault();

  const handleFilterChange = (section, filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [section]: prev[section] === filter ? null : filter
    }));
  };

  const getFilteredCourses = (courses, section) => {
    const activeFilter = activeFilters[section];
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter ? course.category === activeFilter : true;
      return matchesSearch && matchesFilter;
    });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <SearchHeader 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch}
        isEducator={isEducator}
      />

      <div className="container mx-auto px-4 py-8">
        {sectionsConfig.map(sec => (
          <FilterSection
            key={sec.key}
            sectionKey={sec.key}
            title={sec.title}
            subtitle={sec.subtitle}
            icon={sec.icon}
            coursesData={coursesData}
            filterOptions={filterOptions}
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
            getFilteredCourses={getFilteredCourses}
            showProgress={sec.showProgress || false}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

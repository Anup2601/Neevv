import CourseCard from "./CourseCard";
import SectionHeader from "./SectionHeader";
import FilterButtons from "./FilterButtons";

const FilterSection = ({
  sectionKey,
  title,
  subtitle,
  icon,
  coursesData,
  filterOptions,
  activeFilters,
  handleFilterChange,
  getFilteredCourses,
  showProgress = false
}) => {
  const filteredCourses = getFilteredCourses(coursesData[sectionKey], sectionKey);

  return (
    <section className="mb-16">
      <SectionHeader icon={icon} title={title} subtitle={subtitle} />
      <FilterButtons
        section={sectionKey}
        options={filterOptions[sectionKey]}
        activeFilters={activeFilters}
        handleFilterChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No courses found.</p>
        ) : (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} showProgress={showProgress} />
          ))
        )}
      </div>
    </section>
  );
};

export default FilterSection;

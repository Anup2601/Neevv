const FilterButtons = ({ section, options, activeFilters, handleFilterChange }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    <button
      className={`btn btn-sm rounded-full hover:scale-110 ${!activeFilters[section] ? 'btn-primary' : 'btn-outline'}`}
      onClick={() => handleFilterChange(section, null)}
    >
      All
    </button>
    {options.map(option => (
      <button
        key={option}
        className={`btn btn-sm rounded-full hover:scale-110 ${activeFilters[section] === option ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => handleFilterChange(section, option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FilterButtons;

import { useNavigate } from "react-router-dom";

const SearchHeader = ({ searchQuery, setSearchQuery, handleSearch, isEducator }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-base-100 border-b border-base-300">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Explore Courses</h1>
          <p className="text-base-content/70 text-lg">
            Discover your next skill with our comprehensive course catalog
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search courses..."
                className="input input-bordered w-full max-w-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
              />
            </div>
          </div>

          <button className="btn btn-outline btn-primary" onClick={() => navigate("/my-enrollments")}>
            My Courses
          </button>

          {isEducator ? (
            <button className="btn btn-primary" onClick={() => navigate("/educator/dashboard")}>
              Educator Dashboard
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={() => navigate("/educator")}>
              Become Educator
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

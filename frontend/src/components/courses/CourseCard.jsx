import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";

const getLevelStyles = (level) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-700 border-green-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "Advanced":
      return "bg-red-100 text-red-700 border-red-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const CourseCard = ({ course, showProgress = false }) => (
  <Link
    to={`/courses/${course.id}`}
    className="card bg-base-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-base-300"
  >
    <figure className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />
      <div className="absolute top-2 right-2">
        <div className="badge badge-primary gap-1 flex items-center">
          <Star className="w-3 h-3" />
          <span>
            {course.courseRatings && course.courseRatings.length > 0
              ? (
                  course.courseRatings.reduce((acc, r) => acc + r.rating, 0) /
                  course.courseRatings.length
                ).toFixed(1)
              : "0.0"}
          </span>
        </div>
      </div>
    </figure>

    <div className="card-body p-4">
      <h3 className="card-title text-lg">{course.title}</h3>
      <p className="text-base-content/70 text-sm mb-2">
        by {course.instructor}
      </p>

      {showProgress && (
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={course.progress}
            max="100"
          ></progress>
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
        <div
          className={`rounded-full px-3 py-1 text-xs font-semibold border ${getLevelStyles(
            course.level
          )}`}
        >
          {course.level}
        </div>

        {course.price && (
          <div className="ml-4 text-right">
            <p className="text-sm line-through">₹{course.price.toFixed(2)}</p>
            <p className="text-lg font-bold text-green-600">
              ₹
              {(
                course.price -
                (course.price * (course.discount || 0)) / 100
              ).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  </Link>
);

export default CourseCard;

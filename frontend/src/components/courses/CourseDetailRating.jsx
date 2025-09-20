import React from "react";
import { Star, Users2 } from "lucide-react";

const CourseDetailRating = ({ course, calculateRating }) => (
  <div className="mb-6">
    <div className="flex items-center space-x-4">
      <span className="flex items-center text-accent">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(calculateRating(course))
                ? "fill-current text-yellow-400"
                : ""
            }`}
          />
        ))}
      </span>
      <p>{course.courseRatings.length}K+ rating</p>
      <span className="flex items-center">
        <Users2 className="w-4 h-4 mr-1" /> {course.students} students enrolled
      </span>
    </div>
  </div>
);

export default CourseDetailRating;

import React from "react";

const CourseDetailHeader = ({ course }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
    <div
      className="prose prose-sm max-w-none text-gray-700"
      dangerouslySetInnerHTML={{
        __html:
          course.courseDescription?.slice(0, 180) ||
          "<p>No description available.</p>",
      }}
    />
    <p className="mt-2">
      Course by <span className="font-semibold">{course.instructor}</span>
    </p>
  </div>
);

export default CourseDetailHeader;

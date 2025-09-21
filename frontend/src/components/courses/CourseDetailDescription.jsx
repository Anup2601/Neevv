import React from "react";

const CourseDetailDescription = ({ course }) => (
  <div className="bg-base-100 rounded-lg shadow p-4 border border-base-300">
    <h3 className="text-lg font-bold mb-2 text-primary">Course Description</h3>
    <div
      className="prose prose-sm max-w-none "
      dangerouslySetInnerHTML={{
        __html: course.courseDescription || "<p>No description available.</p>",
      }}
    />
  </div>
);

export default CourseDetailDescription;

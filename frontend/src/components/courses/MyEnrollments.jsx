import React, { useState, useEffect } from "react";
import coursesData from "../../data/coursesData"; 
import humanizeDuration from "humanize-duration";

const MyEnrollments = () => {
  const calculateCourseTime = (course) => {
    let time = 0;
    course.courseContent.forEach((ch) =>
      ch.chapterContent.forEach((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
      spacer: "",
    });
  };

  // Example enrolled courses
  const [enrolledIds] = useState([1, 3, 5, 7, 8, 9]); 
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const allCourses = Object.values(coursesData).flat();
    const filtered = allCourses.filter(course => enrolledIds.includes(course.id));
    setEnrolledCourses(filtered);
  }, [enrolledIds]);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-base-200 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">My Enrollments</h1>

      <div className="overflow-x-auto hidden md:block">
        <table className="table table-zebra w-full">
          <thead className="bg-base-300 text-base">
            <tr>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Duration</th>
              <th className="px-4 py-3 text-left">Completed</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, index) => (
                <tr key={index} className="hover:bg-base-100 transition-colors">
                  <td className="flex items-center space-x-3 px-4 py-3">
                    <img
                      src={course.image || "https://placehold.co/100x60?text=No+Image"}
                      alt={course.title}
                      className="w-16 sm:w-20 md:w-24 rounded-lg shadow"
                    />
                    <p className="font-medium">{course.title}</p>
                  </td>
                  <td className="px-4 py-3">{calculateCourseTime(course) || "N/A"}</td>
                  <td className="px-4 py-3">
                    {course.completedLectures || 0}/{course.totalLectures || 0} Lectures
                  </td>
                  <td className="px-4 py-3">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary">
                      {course.status || "On Going"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  You haven’t enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden mt-6 space-y-4">
        {enrolledCourses.map((course, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-md border border-base-300">
            <figure>
              <img
                src={course.image || "https://placehold.co/300x150?text=No+Image"}
                alt={course.title}
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-base sm:text-lg">{course.title}</h2>
              <p className="text-sm text-gray-600">
                Duration: {calculateCourseTime(course) || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Completed: {course.completedLectures || 0}/{course.totalLectures || 0} Lectures
              </p>
              <div className="card-actions mt-2">
                <button className="btn btn-primary btn-sm w-full">{course.status || "On Going"}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollments;

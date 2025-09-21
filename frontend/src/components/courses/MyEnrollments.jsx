import React, { useState, useEffect } from "react";
import coursesData from "../../data/coursesData"; 
import { calculateCourseTime } from "../../utils/courseUtils";
import { useNavigate } from "react-router-dom";
import {Line} from "rc-progress";

const MyEnrollments = () => {

  const navigate = useNavigate();
  const [progressArray, setProgressArray]= useState([
    {lectureCompleted:3, totalLectures:6},
    {lectureCompleted:4, totalLectures:6},
    {lectureCompleted:2, totalLectures:6},
    {lectureCompleted:0, totalLectures:6},
    {lectureCompleted:6, totalLectures:6},
    {lectureCompleted:2, totalLectures:6},
    {lectureCompleted:1, totalLectures:6},
    {lectureCompleted:3, totalLectures:6},
  ])

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
                    <div className="flex-1">
                      <p className="font-medium">{course.title}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted*100)/progressArray[index].totalLectures :0} className="rounded-full"/>
                    </div>
                  </td>
                  <td className="px-4 py-3">{calculateCourseTime(course) || "N/A"}</td>
                  <td className="px-4 py-3">
                    {progressArray[index] && `${progressArray[index].lectureCompleted}/ ${progressArray[index].totalLectures}`} Lectures
                  </td>
                  <td className="px-4 py-3">
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary" onClick={()=>navigate(`/player/${course.id}`)}>
                      {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures===1 ? 'Completed' : "On Going"}
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
              <div className="flex-1">
                      <p className="font-medium">{course.title}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted*100)/progressArray[index].totalLectures :0} className="rounded-full pt-4 m-2"/>
                    </div>
              <p className="text-sm ">
                Duration: {calculateCourseTime(course) || "N/A"}
              </p>
              <p className="text-sm ">
                Completed: {progressArray[index] && `${progressArray[index].lectureCompleted}/ ${progressArray[index].totalLectures}`} Lectures
              </p>
              <div className="card-actions mt-2">
                <button className="btn btn-primary btn-sm w-full" onClick={()=>navigate(`/player/${course.id}`)}>{progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures===1 ? 'Completed' : "On Going"}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollments;

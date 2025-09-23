import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import coursesData from "../../data/coursesData";

const MyCourses = () => {
  const [courses, setCourses] = useState(null);

  const fetchAllCourses = async () => {
    const all=Object.values(coursesData).flat()
    setCourses(all);
  };


  useEffect(() => {
    fetchAllCourses();
  }, []);

  return courses ? (
    <>
      <div className="p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-6"> My Courses</h1>

        <div className="bg-base-200 shadow-lg rounded-xl p-6 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-300 text-base">
                <th>Course</th>
                <th>Earnings</th>
                <th>Students</th>
                <th>Published On</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-base-100">
                  <td className="flex items-center gap-3">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-12 h-12 rounded-lg shadow-md"
                    />
                    <span className="font-medium">{course.title}</span>
                  </td>
                  <td className="text-success font-semibold">
                    ₹
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.price -
                          (course.discount * course.price) / 100)
                    )}
                  </td>
                  <td className="font-medium">{course.enrolledStudents.length}</td>
                  <td>{new Date(course.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default MyCourses;

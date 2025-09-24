import React, { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../data/studentEnrolledData";
import Loader from "../../components/Loader";
import humanizeDuration from "humanize-duration";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Enrolled Students</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-base-300 rounded-lg shadow">
          <thead className="bg-base-200">
            <tr>
              <th className="p-3 text-left">S.No</th>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Course Title</th>
              <th className="p-3 text-left">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((item, index) => (
              <tr
                key={item.student._id + index}
                className="border-b border-base-300 hover:bg-base-100 transition"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.student.imageUrl}
                    alt={item.student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{item.student.name}</span>
                </td>
                <td className="p-3">{item.courseTitle}</td>
                <td className="p-3">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default StudentsEnrolled;

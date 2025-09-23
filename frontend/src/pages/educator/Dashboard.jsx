import React, { useEffect, useState } from "react";
import { dummyDashboardData } from "../../data/dadhboardData";
import Loader from "../../components/Loader";
import { User, BookOpen, DollarSign, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (!dashboardData) return <Loader />;

  const courseEnrollments = dashboardData.enrolledStudentsData.map((item) => ({
    name: item.courseTitle,
    students: 1,
  }));

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
    <h1 className="text-2xl font-bold mb-6"> Dashboard</h1>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="stat bg-base-200 shadow-lg rounded-xl p-6 flex items-center gap-4"
        >
          <User className="text-primary w-10 h-10" />
          <div>
            <p className="text-2xl font-bold">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-sm text-gray-500">Total Enrollments</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="stat bg-base-200 shadow-lg rounded-xl p-6 flex items-center gap-4"
        >
          <BookOpen className="text-success w-10 h-10" />
          <div>
            <p className="text-2xl font-bold">{dashboardData.totalCourses}</p>
            <p className="text-sm text-gray-500">Total Courses</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="stat bg-base-200 shadow-lg rounded-xl p-6 flex items-center gap-4"
        >
          <IndianRupee className="text-warning w-10 h-10" />
          <div>
            <p className="text-2xl font-bold">₹{dashboardData.totalEarnings}</p>
            <p className="text-sm text-gray-500">Total Earnings</p>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-200 shadow-lg p-6 rounded-xl"
        >
          <h2 className="text-lg font-semibold mb-4">Course Enrollments</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={courseEnrollments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-200 shadow-lg p-6 rounded-xl"
        >
          <h2 className="text-lg font-semibold mb-4">Student Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={courseEnrollments}
                dataKey="students"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {courseEnrollments.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
      {/* Student List as Table */}
      <div className="bg-base-200 shadow-lg rounded-xl p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>

        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="table w-full"
        >
          <thead>
            <tr className="bg-base-300 text-base">
              <th>S.No.</th>
              <th>Student Name</th>
              <th>Course Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.enrolledStudentsData.map((item, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="hover:bg-base-100"
              >
                <td>{idx + 1}</td>
                <td className="flex items-center gap-2">
                  <img
                    src={item.student.imageUrl}
                    alt={item.student.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{item.student.name}</span>
                </td>
                <td>{item.courseTitle}</td>
                <td>{new Date().toLocaleDateString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Star, Timer, BookOpen } from "lucide-react";

const CourseDetailSidebar = ({
  course,
  calculateRating,
  calculateCourseTime,
  calculateNoOfLectures,
  handlePayment,
  isAlreadyEnrolled,
}) => (
  <div className="space-y-6 mt-6">
    {/* Price & discount */}
    <div className="mb-6">
      <span className="text-2xl font-bold text-green-600">
        ₹{(course.price - (course.price * course.discount) / 100).toFixed(2)}
      </span>
      <span className="line-through ml-3">₹{course.price}</span>
      <p>{course.discount}% off</p>
    </div>

    {/* Stats */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center gap-2">
        <Star className="text-yellow-400" /> {calculateRating(course)}
      </div>
      <div className="h-4 w-px bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <Timer /> {calculateCourseTime(course)}
      </div>
      <div className="h-4 w-px bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <BookOpen /> {calculateNoOfLectures(course)} lessons
      </div>
    </div>

    {/* Button */}
    <button
      className="btn btn-primary btn-lg w-full"
      onClick={handlePayment}
      disabled={isAlreadyEnrolled}
    >
      {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
    </button>

    {/* Features */}
    <div>
      <p className="font-semibold">What's in the course?</p>
      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
        <li>Lifetime access with free updates</li>
        <li>Step-by-step, hands-on project guidance</li>
        <li>Downloadable resources & source code</li>
        <li>Quizzes to test your knowledge</li>
        <li>Certificate of completion</li>
      </ul>
    </div>
  </div>
);

export default CourseDetailSidebar;

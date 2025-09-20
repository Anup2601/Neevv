import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import CourseHeader from "../components/courses/CourseDetailHeader";
import CourseRating from "../components/courses/CourseDetailRating";
import CourseContent from "../components/courses/CourseDetailContent";
import CourseDescription from "../components/courses/CourseDetailDescription";
import CoursePlayer from "../components/courses/CourseDetailPlayer";
import CourseSidebar from "../components/courses/CourseDetailSidebar";

import humanizeDuration from "humanize-duration";

const CourseDetailPage = ({ courses, user }) => {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const course = Object.values(courses ?? {})
    .flat()
    .find((c) => c.id === Number(id));

  if (!course) return <h2 className="text-center mt-10">Course not found</h2>;

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) return 0;
    let totalRating = 0;
    course.courseRatings.forEach((r) => (totalRating += r.rating));
    return totalRating / course.courseRatings.length;
  };

  const handlePayment = async () => {
    try {
      const discountPrice = course.discount
        ? (course.price - (course.price * course.discount) / 100).toFixed(2)
        : course.price;

      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-payment-intent",
        { amount: discountPrice }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "My Learning Platform",
        description: course.title,
        order_id: data.order.id,
        handler: async (response) => {
          await axios.post(
            "http://localhost:5000/api/payment/verify-payment",
            response,
            { withCredentials: true }
          );
          Toaster.success("Payment successful!");
        },
        prefill: {
          name: user?.fullName || "Guest User",
          email: user?.email || "guest@example.com",
          contact: user?.phone || "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      Toaster.error("Payment failed. Please try again.");
    }
  };

  const calculateChapterTime = (chapters) => {
    let time = 0;
    chapters.chapterContent.forEach((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
      spacer: "",
    });
  };

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

  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((ch) => {
      if (Array.isArray(ch.chapterContent)) {
        totalLectures += ch.chapterContent.length;
      }
    });
    return totalLectures;
  };

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <CourseHeader course={course} />
        <CourseRating course={course} calculateRating={calculateRating} />
        <CourseContent
          course={course}
          openSection={openSection}
          toggleSection={toggleSection}
          setPlayerData={setPlayerData}
          calculateChapterTime={calculateChapterTime}
        />
        <CourseDescription course={course} />
      </div>

      <div className="lg:col-span-1">
        <CoursePlayer playerData={playerData} course={course} />
        <CourseSidebar
          course={course}
          calculateRating={calculateRating}
          calculateCourseTime={calculateCourseTime}
          calculateNoOfLectures={calculateNoOfLectures}
          handlePayment={handlePayment}
          isAlreadyEnrolled={isAlreadyEnrolled}
        />
      </div>
    </div>
  );
};

export default CourseDetailPage;

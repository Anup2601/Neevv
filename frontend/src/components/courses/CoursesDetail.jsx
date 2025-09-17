// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CourseDetailPage = ({ courses }) => {
//   const { id } = useParams();
//   const course = Object.values(courses).flat().find(c => c.id === Number(id));

//   if (!course) return <h2 className="text-center mt-10">Course not found</h2>;

//   const handlePayment = async () => {
//     try {
//       // 1. Create order on backend
//       const { data } = await axios.post("http://localhost:5000/api/payment/create-payment-intent", {
//         amount:  course.discountPrice || course.price
//       });

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // your test/live key
//         amount: data.order.amount,
//         currency: data.order.currency,
//         name: "My Learning Platform",
//         description: course.title,
//         order_id: data.order.id,
//         handler: async function (response) {
//           // 2. Verify payment on backend
//           await axios.post("http://localhost:5000/api/payment/verify-payment", response, {
//             withCredentials: true
//           });
//           alert("✅ Payment successful!");
//         },
//         prefill: {
//           name: "Test User",
//           email: "test@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <img src={course.image} alt={course.title} className="rounded-xl shadow-md" />

//         <div>
//           <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
//           <p className="text-lg text-gray-600 mb-4">Instructor: {course.instructor}</p>
//           <p className="text-gray-700 mb-4">
//             Duration: {course.duration} | Level: {course.level} | Students: {course.students}
//           </p>
//           <p className="text-lg text-gray-800 mb-6">
//             Learn {course.title} from scratch with real-world projects and expert guidance.
//           </p>

//           {/* Price */}
//           <div className="mb-6">
//             <span className="text-2xl font-bold text-green-600">
//               ₹{course.discountPrice || course.price}
//             </span>
//             {course.discountPrice && (
//               <span className="line-through text-gray-500 ml-3">₹{course.price}</span>
//             )}
//           </div>

//           {/* Buy button */}
//           <button className="btn btn-primary btn-lg" onClick={handlePayment}>
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;

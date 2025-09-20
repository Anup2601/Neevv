import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ChatHomePage from "./pages/ChatHomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import { Navbar } from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import { Loader2} from "lucide-react";
import {Toaster} from "react-hot-toast"
import HomePage from "./pages/HomePage";
import About from "./components/landing/About";
import ContactMain from "./components/landing/Contact";
import CoursesPage from "./pages/CoursesPage";
import PaymentPage from "./components/Payment";
import CourseDetailPage from "./pages/CourseDetailPage";
import Loader from "./components/Loader";
import MyEnrollments from "./components/courses/MyEnrollments";
import Player from "./components/courses/Player";
import Educator from "./components/educator/Educator";
import Dashboard from "./components/educator/Dashboard";
import AddCourse from "./components/educator/AddCourse";
import MyCourses from "./components/educator/MyCourses";
import StudentsEnrolled from "./components/educator/StudentsEnrolled";
import coursesData from "./data/coursesData";

export default function App() {
const location = useLocation();
const {authUser,checkAuth,isCheckingAuth ,onlineUsers }=useAuthStore();
const {theme}=useThemeStore();
useEffect(()=>{
  checkAuth();
}, [checkAuth] )

console.log(authUser);

if(isCheckingAuth && !authUser){
  return <Loader />
}

  return (
    <div data-theme={theme} className="dark:bg-dark-500 bg-light-500 min-h-screen">
       {location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/contact" && <Navbar />}

       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMain />} />

        <Route path="/home" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/courses" element={authUser ? <CoursesPage /> : <Navigate to="/login" />} />
        <Route path="/courses/:id" element={authUser ? <CourseDetailPage courses={coursesData} /> : <Navigate to="/login" />} />
        <Route path="/my-enrollments" element={authUser ? <MyEnrollments /> : <Navigate to="/login" />} />
        <Route path="/player/:courseId" element={authUser ? <Player /> : <Navigate to="/login" />} />
        <Route path="/loading/:path" element={<Loader />} />

        <Route path="/chat" element={authUser ? <ChatHomePage /> : <Navigate to="/login" />} />

        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/home" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/home" />} />

        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

        <Route path="/payment" element={authUser ? <PaymentPage /> : <Navigate to="/login" />} />

        <Route path="/educator" element={authUser ? <Educator /> : <Navigate to="/login" />} >
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="add-course" element={<AddCourse/>} />
          <Route path="my-courses" element={<MyCourses/>} />
          <Route path="student-enrolled" element={<StudentsEnrolled/>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster/>
    </div>
    
  )
}
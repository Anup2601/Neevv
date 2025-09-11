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
import {Heading3, Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import HomePage from "./pages/HomePage";
import About from "./components/landing/About";
import ContactMain from "./components/landing/Contact";
import CoursesPage from "./components/Courses";

export default function App() {
const location = useLocation();
const {authUser,checkAuth,isCheckingAuth ,onlineUsers }=useAuthStore();
const {theme}=useThemeStore();
useEffect(()=>{
  checkAuth();
}, [checkAuth] )

console.log(authUser);

if(isCheckingAuth && !authUser){
  return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin "/>
    </div>
  )
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
        <Route path="/chat" element={authUser ? <ChatHomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/home" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster/>
    </div>
    
  )
}
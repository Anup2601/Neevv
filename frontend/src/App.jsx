import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
       {location.pathname !== "/" && <Navbar />}

       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
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
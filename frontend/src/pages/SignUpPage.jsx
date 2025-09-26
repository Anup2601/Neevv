import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Signup from "../assets/login.png";
import { axiosInstanace } from "../lib/axios";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSignUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return toast.error("Invalid Email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmition = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-2 bg-base-200">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center  lg:py-5 ">
        <div className="w-full max-w-md space-y-8 bg-base-100 shadow-xl rounded-2xl p-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Create Account</h1>
            <p className="text-base text-base-content/70">
              Get started with your free account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmition} className="space-y-6">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <User className="size-5 opacity-70" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </label>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <Mail className="size-5 opacity-70" />
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <Lock className="size-5 opacity-70" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="opacity-70 hover:opacity-100"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-full"
              disabled={isSignUp}
            >
              {isSignUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">or</div>

          {/* Social Signups */}
          <div className="space-y-3">
            {/* Google */}
            <button
              className="btn btn-outline w-full rounded-full flex items-center justify-center gap-2"
              onClick={() =>
                (window.location.href = `${axiosInstanace.defaults.baseURL}/auth/google`)
              }
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side (illustration) */}
      <div className="hidden lg:flex flex-col items-center justify-center ">
        <div className="max-w-md text-center space-y-12">
          <img
            src={Signup}
            alt="Signup Illustration"
            className="w-full h-auto object-contain  "
          />
          <p className="text-base-content/70">
            Start your learning journey today 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

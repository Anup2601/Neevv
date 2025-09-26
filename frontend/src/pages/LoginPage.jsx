import { Eye, EyeOff, Loader2, Lock, Mail, Linkedin } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import Login from "../assets/login.png";
import { axiosInstanace } from "../lib/axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmition = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-2 bg-base-200 lg:py-9 ">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center sm:px-12">
        <div className="w-full max-w-md space-y-8 bg-base-100 shadow-xl rounded-2xl p-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
            <p className="text-base text-base-content/70">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmition} className="space-y-6">
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
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">or</div>

          {/* Social logins */}
          <div className="space-y-3">
            {/* Google with icon */}
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
              Continue with Google
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-primary hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side (illustration) */}
      <div className="hidden lg:flex flex-col items-center justify-center ">
        <div className="max-w-md text-center space-y-6 ">
          <img
            src={Login}
            alt="Login Illustration"
            className="w-full h-auto object-contain"
          />
          <p className="text-base-content/70">
            Join the learning revolution today 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

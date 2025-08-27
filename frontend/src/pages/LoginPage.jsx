import { Eye, EyeOff, Loader2, Lock, Mail, BookOpen } from 'lucide-react';
import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import Login from '../assets/login.png' 

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
  }

  return (
    <div className='h-screen grid lg:grid-cols-2 bg-gradient-to-br from-primary to-secondary relative overflow-hidden'>
      {/* Unified Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-6 h-full w-full p-8">
          {[...Array(72)].map((_, i) => (
            <div 
              key={i} 
              className="bg-base-100 rounded-lg transform rotate-45 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Floating Animated Educational Elements */}
      <div className="absolute top-20 left-20 text-base-100/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <BookOpen size={40} />
      </div>
      <div className="absolute top-40 right-16 text-base-100/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="animate-spin" style={{ animationDuration: '8s' }}>
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="m12 14 6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-16 text-base-100/30 animate-pulse" style={{ animationDelay: '2s', animationDuration: '2s' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="animate-ping">
          <path d="M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zM2.5 9h2.95c.32-1.25.78-2.45 1.38-3.56C5.325 6.35 3.75 7.55 2.5 9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      </div>
      <div className="absolute top-60 right-32 text-base-100/30 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 text-base-100/30 animate-spin" style={{ animationDuration: '6s' }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* left side */}
      <div className='flex flex-col justify-center items-center p-6 sm:p-12 relative z-30'>
        <div className='w-full max-w-md space-y-8'>
          {/* logo */}
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <h1 className='text-5xl font-bold mt-8 text-base-100'>Welcome Back</h1>
              <p className='text-2xl text-base-100/90'>Sign in to your Account</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmition} className='space-y-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium text-base-100'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <Mail className='size-5 text-base-100/60 z-10'/>
                </div>
                <input
                  type='email'
                  className="input w-full pl-12 pr-4 py-2 rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 placeholder-base-100/60 focus:bg-base-100/30 focus:border-base-100/50 transition-all duration-300"
                  placeholder='Enter Your Email'
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium text-base-100'>Password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <Lock className='size-5 text-base-100/60 z-10'/>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full pl-12 pr-12 py-3 rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 placeholder-base-100/60 focus:bg-base-100/30 focus:border-base-100/50 transition-all duration-300"
                  placeholder='Enter Your Password'
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type='button'
                  className='absolute inset-y-0 right-0 pr-4 flex items-center'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='size-5 text-base-100/60 hover:text-base-100 transition-colors'/>
                  ) : (
                    <Eye className='size-5 text-base-100/60 hover:text-base-100 transition-colors'/>
                  )}
                </button>
              </div>
            </div>

            <button type='submit' className='btn w-full rounded-full bg-base-100 text-primary hover:bg-base-100/90 border-none font-semibold py-2 transition-all duration-300 transform hover:scale-105' disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className='size-5 animate-spin'/>
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-px bg-base-100/30"></div>
            <span className="text-base-100/60 text-sm">or</span>
            <div className="flex-1 h-px bg-base-100/30"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="btn w-full rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 hover:bg-base-100/30 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            
            {/* <button className="btn w-full rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 hover:bg-base-100/30 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button> */}
            
            <button className="btn w-full rounded-full bg-base-100/20 backdrop-blur-sm border-base-100/30 text-base-100 hover:bg-base-100/30 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Continue with LinkedIn
            </button>
          </div>

          <div className='text-center'>
            <p className='text-base-100/90'>
              Don&apos;t have an Account?{" "}
              <Link to="/signup" className='text-base-100 font-semibold hover:text-base-100/80 transition-colors underline'>
                Create Account 
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="hidden lg:flex flex-col items-center justify-center p-12 relative z-30">
        {/* Main Content */}
        <div className="text-center text-base-100 max-w-lg space-y-8">

          {/* Login Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="size-100 p-4">
              <img 
                src={Login} 
                alt="Login illustration" 
                className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105 animate-pulse"
                style={{ animationDuration: '3s' }}
              />
            </div>
          </div>

          {/* Call to Action Animation */}
          <div className="animate-pulse">
            <div className="flex items-center justify-center space-x-2 text-base-100/60 text-sm">
              <div className="w-2 h-2 bg-base-100 rounded-full animate-ping"></div>
              <span>Join the learning revolution today</span>
              <div className="w-2 h-2 bg-base-100 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
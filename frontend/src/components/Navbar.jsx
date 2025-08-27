import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  BookOpen, 
  Search, 
  Briefcase, 
  Trophy, 
  Users, 
  Code, 
  MoreHorizontal,
  MessageSquare,
  Bell,
  User,
  Settings,
  HelpCircle,
  LogOut,
  GraduationCap,
  Wrench,
  Award,
  BookTextIcon,
  IdCard,
  TicketCheck,
  FilePenLine
} from 'lucide-react';

export const Navbar = () => {
  const { logout, authUser, onlineUsers } = useAuthStore();
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (item) => {
    toast.success(`Navigating to ${item}`, {
      duration: 2000,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`, {
        duration: 2000,
      });
    } else {
      toast.error('Please enter a search term');
    }
  };

  const handleLogout = () => {
    toast.success('Logged out successfully!', {
      duration: 2000,
    });
    logout();
  };

  const moreItems = [
    { name: 'Courses', icon: BookTextIcon, path: '/courses' },
    { name: 'Scholarships', icon: Award, path: '/scholarships' },
    { name: 'Cultural Events', icon: IdCard, path: '/cultural-events' },
    { name: 'Workshops', icon: Wrench, path: '/workshops' },
    { name: 'Conferences', icon: TicketCheck, path: '/conferences' },
    { name: 'Blog', icon: FilePenLine, path: '/blog' },
  ];

  return (
    <header className='bg-base-100/95 border-b border-base-300 fixed w-full top-0 z-50 backdrop-blur-lg'>
      <div className='container mx-auto px-10 h-16'>
        <div className='flex items-center justify-between h-full'>
          {/* Logo */}
          <div className='flex items-center gap-4'>
            <Link 
              to='/home' 
              className='flex items-center gap-2.5 hover:opacity-70 transition-all'
              onClick={() => handleNavClick('Home')}
            >
              <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                <BookOpen className='size-8 text-primary'/>
              </div>
              <h1 className='text-lg font-bold'>Neev</h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className='flex-1 max-w-md mx-8 hidden md:block'>
            <form onSubmit={handleSearch} className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Search className='size-5 text-base-content/40'/>
              </div>
              <input
                type='text'
                placeholder='Search courses, jobs...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='input input-bordered w-full pl-12 pr-4 h-10 bg-base-200/50 focus:bg-base-200 transition-all rounded-full'
              />
            </form>
          </div>

          {/* Navigation Items */}
          <div className='flex items-center gap-2'>
            {/* Main Nav Items */}
            <div className='hidden lg:flex items-center gap-4'>
              <Link
                to='/internships'
                className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                onClick={() => handleNavClick('Internships')}
              >
                <Briefcase className='Size-5'/>
                <span className='text-xs'>Internships</span>
              </Link>

              <Link
                to='/jobs'
                className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                onClick={() => handleNavClick('Jobs')}
              >
                <GraduationCap className='size-5'/>
                <span className='text-xs'>Jobs</span>
              </Link>

              <Link
                to='/competitions'
                className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                onClick={() => handleNavClick('Competitions')}
              >
                <Trophy className='size-5'/>
                <span className='text-xs'>Competitions</span>
              </Link>

              <Link
                to='/mentors'
                className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                onClick={() => handleNavClick('Mentors')}
              >
                <Users className='size-5'/>
                <span className='text-xs'>Mentors</span>
              </Link>

              <Link
                to='/practice'
                className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                onClick={() => handleNavClick('Practice')}
              >
                <Code className='size-5'/>
                <span className='text-xs'>Practice</span>
              </Link>

              {/* More Dropdown */}
              <div className='dropdown dropdown-end'>
                <div 
                  tabIndex={0} 
                  role='button' 
                  className='btn btn-ghost btn-sm gap-1 flex-col h-12 min-h-12'
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                >
                  <MoreHorizontal className='size-5'/>
                  <span className='text-xs'>More</span>
                </div>
                {showMoreDropdown && (
                  <ul className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300 mt-2'>
                    {moreItems.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.path} 
                          className='gap-3 py-3'
                          onClick={() => {
                            handleNavClick(item.name);
                            setShowMoreDropdown(false);
                          }}
                        >
                          <item.icon className='size-5'/>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile Search */}
            <button 
              className='btn btn-ghost btn-sm lg:hidden'
              onClick={() => toast.info('Mobile search opened')}
            >
              <Search className='size-5'/>
            </button>

            {/* Chat */}
            <Link
              to='/chat'
              className='btn btn-ghost btn-sm relative'
              onClick={() => handleNavClick('Chat')}
            >
              <MessageSquare className='w-5 h-5'/>
              <span className='hidden sm:inline ml-1'>Chat</span>
              <div className='absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center'>
                <span className='text-[8px] text-white font-bold'>3</span>
              </div>
            </Link>

            {/* Notifications */}
            <button
              className='btn btn-ghost btn-sm relative'
              onClick={() => toast.info('You have 5 new notifications')}
            >
              <Bell className='w-5 h-5'/>
              <span className='hidden sm:inline ml-1'>Notifications</span>
              <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center'>
                <span className='text-[8px] text-white font-bold'>5</span>
              </div>
            </button>

            {/* Profile Dropdown */}
            {authUser && (
              <div className='dropdown dropdown-end'>
                <div 
                  tabIndex={0} 
                  role='button' 
                  className='btn btn-ghost btn-circle avatar'
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  <div className='w-8 h-8 rounded-full relative'>
                    <img 
                      src={authUser.profilePic || "/avatar.png"} 
                      alt={authUser.fullName}
                      className='rounded-full object-cover'
                    />
                    {onlineUsers?.includes(authUser._id) && (
                      <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
                    )}
                  </div>
                </div>
                
                {showProfileDropdown && (
                  <ul className='dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2 shadow-lg border border-base-300 mt-2'>
                    {/* User Info */}
                    <li className='menu-title'>
                      <div className='flex items-center gap-3 py-2'>
                        <div className='w-10 h-10 rounded-full relative'>
                          <img 
                            src={authUser.profilePic || "/avatar.png"} 
                            alt={authUser.fullName}
                            className='rounded-full object-cover'
                          />
                        </div>
                        <div>
                          <p className='font-medium text-sm'>{authUser.fullName}</p>
                          <p className='text-xs text-base-content/60'>{authUser.email}</p>
                        </div>
                      </div>
                    </li>
                    
                    <div className='divider my-1'></div>
                    
                    <li>
                      <Link 
                        to='/profile' 
                        className='gap-3 py-3'
                        onClick={() => {
                          handleNavClick('My Profile');
                          setShowProfileDropdown(false);
                        }}
                      >
                        <User className='size-5'/>
                        My Profile
                      </Link>
                    </li>
                    
                    <li>
                      <Link 
                        to='/settings' 
                        className='gap-3 py-3'
                        onClick={() => {
                          handleNavClick('Settings');
                          setShowProfileDropdown(false);
                        }}
                      >
                        <Settings className='size-5'/>
                        Settings
                      </Link>
                    </li>
                    
                    <li>
                      <Link 
                        to='/help' 
                        className='gap-3 py-3'
                        onClick={() => {
                          handleNavClick('Help');
                          setShowProfileDropdown(false);
                        }}
                      >
                        <HelpCircle className='size-5'/>
                        Help
                      </Link>
                    </li>
                    
                    <div className='divider my-1'></div>
                    
                    <li>
                      <button 
                        className='gap-3 py-3 text-error hover:bg-error/10'
                        onClick={() => {
                          handleLogout();
                          setShowProfileDropdown(false);
                        }}
                      >
                        <LogOut className='size-5'/>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='lg:hidden border-t border-base-300 bg-base-100'>
        <div className='container mx-auto px-4 py-2'>
          <div className='flex justify-around'>
            <Link
              to='/internships'
              className='flex flex-col items-center gap-1 p-2 text-xs'
              onClick={() => handleNavClick('Internships')}
            >
              <Briefcase className='size-5'/>
              Internships
            </Link>
            
            <Link
              to='/jobs'
              className='flex flex-col items-center gap-1 p-2 text-xs'
              onClick={() => handleNavClick('Jobs')}
            >
              <GraduationCap className='size-5'/>
              Jobs
            </Link>
            
            <Link
              to='/competitions'
              className='flex flex-col items-center gap-1 p-2 text-xs'
              onClick={() => handleNavClick('Competitions')}
            >
              <Trophy className='size-5'/>
              Competitions
            </Link>
            
            <Link
              to='/mentors'
              className='flex flex-col items-center gap-1 p-2 text-xs'
              onClick={() => handleNavClick('Mentors')}
            >
              <Users className='size-5'/>
              Mentors
            </Link>
            
            <Link
              to='/practice'
              className='flex flex-col items-center gap-1 p-2 text-xs'
              onClick={() => handleNavClick('Practice')}
            >
              <Code className='size-5'/>
              Practice
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
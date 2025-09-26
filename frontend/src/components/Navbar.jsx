import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import NeevvLogo from "../assets/neevvicon.svg";
import {
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
  FilePenLine,
  MenuSquare,
  Menu,
} from "lucide-react";

export const Navbar = () => {
  const { logout, authUser, onlineUsers } = useAuthStore();
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

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
      toast.error("Please enter a search term");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const moreItems = [
    { name: "Competition", icon: Trophy, path: "/competition" },
    { name: "Scholarships", icon: Award, path: "/scholarships" },
    { name: "Cultural Events", icon: IdCard, path: "/cultural-events" },
    { name: "Workshops", icon: Wrench, path: "/workshops" },
    { name: "Conferences", icon: TicketCheck, path: "/conferences" },
    { name: "Blog", icon: FilePenLine, path: "/blog" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar bg-base-100 border-b border-base-300 fixed w-full top-0 z-50 backdrop-blur-lg shadow-sm min-h-16 pr-12">
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Menu className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
            >
              <li>
                <Link
                  to="/internships"
                  onClick={() => handleNavClick("Internships")}
                  className=""
                >
                  <Briefcase className="w-4 h-4" />
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  onClick={() => handleNavClick("Jobs")}
                  className=""
                >
                  <GraduationCap className="w-4 h-4" />
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={() => handleNavClick("Courses")}
                  className=""
                >
                  <BookTextIcon className="w-4 h-4" />
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/mentors"
                  onClick={() => handleNavClick("Mentors")}
                  className=""
                >
                  <Users className="w-4 h-4" />
                  Mentors
                </Link>
              </li>
              <li>
                <Link
                  to="/practice"
                  onClick={() => handleNavClick("Practice")}
                  className=""
                >
                  <Code className="w-4 h-4" />
                  Practice
                </Link>
              </li>
              {moreItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.name)}
                    className="hover:bg-secondary hover:text-secondary-content"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/home"
            className="btn btn-ghost normal-case text-xl"
            onClick={() => handleNavClick("Home")}
          >
            <div>
              <img src={NeevvLogo} alt="Logo" className="size-12 " fill="currentColor" />
            </div>
            <span className="hidden sm:inline">Neevv</span>
          </Link>
        </div>

        {/* Center - Search (Desktop only) */}
        {/* <div className="navbar-center hidden lg:flex">
          <form onSubmit={handleSearch} className="form-control">
            <div className="input-group">
              <span className="bg-base-200 border-base-300">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search courses, jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-80 max-w-xs bg-base-200/50 focus:bg-base-200"
              />
            </div>
          </form>
        </div> */}

        <div className="navbar-end">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/internships"
              className="btn btn-ghost btn-sm gap-1 flex-col h-14 "
              onClick={() => handleNavClick("Internships")}
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-xs">Internships</span>
            </Link>
            <Link
              to="/jobs"
              className="btn btn-ghost btn-sm gap-1 flex-col h-14 "
              onClick={() => handleNavClick("Jobs")}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs">Jobs</span>
            </Link>
            <Link
              to="/courses"
              className="btn btn-ghost btn-sm gap-1 flex-col h-14 "
              onClick={() => handleNavClick("Courses")}
            >
              <BookTextIcon className="w-4 h-4" />
              <span className="text-xs">Courses</span>
            </Link>
            <Link
              to="/mentors"
              className="btn btn-ghost btn-sm gap-1 flex-col h-14 "
              onClick={() => handleNavClick("Mentors")}
            >
              <Users className="w-4 h-4" />
              <span className="text-xs">Mentors</span>
            </Link>
            <Link
              to="/practice"
              className="btn btn-ghost btn-sm gap-1 flex-col h-14 "
              onClick={() => handleNavClick("Practice")}
            >
              <Code className="w-4 h-4" />
              <span className="text-xs">Practice</span>
            </Link>

            {/* More Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm gap-1 flex-col h-14 hover:bg-secondary hover:text-secondary-content"
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
              >
                <MoreHorizontal className="w-4 h-4" />
                <span className="text-xs">More</span>
              </div>
              {showMoreDropdown && (
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300 mt-2">
                  {moreItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="gap-3 py-3 hover:bg-secondary hover:text-secondary-content"
                        onClick={() => {
                          handleNavClick(item.name);
                          setShowMoreDropdown(false);
                        }}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center lg:gap-6 ml-6">
            {/* Chat */}
            <Link
              to="/chat"
              className="btn btn-ghost btn-circle relative "
              onClick={() => handleNavClick("Chat")}
            >
              <MessageSquare className="size-6" />
              {/* <span className="hidden sm:inline text-sm">Chat</span> */}
              <div className="indicator-item badge badge-primary badge-sm absolute -top-1 -right-1 rounded-full">
                3
              </div>
            </Link>

            {/* Notifications */}
            <button
              className="btn btn-ghost btn-circle relative"
              onClick={() => toast.info("You have 5 new notifications")}
            >
              <Bell className="size-6" />
              {/* <span className="hidden sm:inline text-sm">Notifications</span> */}
              <div className="indicator-item badge badge-error badge-sm absolute -top-1 -right-1 rounded-full">
                5
              </div>
            </button>

            {/* Profile Dropdown */}
            {authUser && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  <div className="size-10 rounded-full relative">
                    <img
                      src={authUser.profilePic || "/avatar.png"}
                      alt={authUser.fullName}
                      className="rounded-full"
                    />
                    {onlineUsers?.includes(authUser._id) && <></>}
                  </div>
                </div>

                {showProfileDropdown && (
                  <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-56 p-2 shadow-lg border border-base-300 mt-2">
                    {/* User Info */}
                    <li className="menu-title">
                      <div className="flex items-center gap-3 py-2">
                        <div className="w-10 h-10 rounded-full">
                          <img
                            src={authUser.profilePic || "/avatar.png"}
                            alt={authUser.fullName}
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {authUser.fullName}
                          </p>
                          <p className="text-xs text-base-content/60">
                            {authUser.email}
                          </p>
                        </div>
                      </div>
                    </li>

                    <div className="divider my-1"></div>

                    <li>
                      <Link
                        to="/profile"
                        className="gap-3 py-3 "
                        onClick={() => {
                          handleNavClick("My Profile");
                          setShowProfileDropdown(false);
                        }}
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/settings"
                        className="gap-3 py-3 "
                        onClick={() => {
                          handleNavClick("Settings");
                          setShowProfileDropdown(false);
                        }}
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/help"
                        className="gap-3 py-3 "
                        onClick={() => {
                          handleNavClick("Help");
                          setShowProfileDropdown(false);
                        }}
                      >
                        <HelpCircle className="w-4 h-4" />
                        Help
                      </Link>
                    </li>

                    <div className="divider my-1"></div>

                    <li>
                      <button
                        className="gap-3 py-3 text-error hover:bg-error hover:text-error-content"
                        onClick={() => {
                          handleLogout();
                          setShowProfileDropdown(false);
                        }}
                      >
                        <LogOut className="w-4 h-4" />
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

      {/* Spacers */}
      <div className="h-16"></div>
      {/* <div className="h-16 lg:hidden"></div> */}
    </>
  );
};

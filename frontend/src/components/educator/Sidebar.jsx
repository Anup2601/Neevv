import { Home, PlusSquare, BookOpen, Users } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [isEducator] = useState(true)

  const menuItems = [
    { name: 'Dashboard', path: '/educator/dashboard', icon: Home },
    { name: 'Add Course', path: '/educator/add-courses', icon: PlusSquare },
    { name: 'My Courses', path: '/educator/my-courses', icon: BookOpen },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: Users },
  ]

  return (
    isEducator && (
      <div className="md:w-64 w-20 min-h-screen border-r border-base-300 bg-base-100 flex flex-col">
        <div className="p-4 text-xl font-bold hidden md:block">
          Educator Panel
        </div>

        <ul className="menu flex-1 px-2 py-4 gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-2 
                     ${isActive ? 'bg-primary text-white' : 'hover:bg-base-200 text-gray-700'}`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    )
  )
}

export default Sidebar

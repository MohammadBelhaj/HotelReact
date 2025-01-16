import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  LogIn, 
  LogOut, 
  Menu, 
  BedDouble,
  UserCircle,
  X,
  Camera,
  Key,
  CalendarCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link to="/" className="flex ml-2 md:mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  <span className="text-blue-600">Royal</span>
                  <span className="text-gray-900">Stay</span>
                  <span className="text-blue-600">.</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/reservations/create-form" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Create a Reservation
              </Link>
              
              <Link to="/check-in" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Client Check-in
              </Link>
              <Link to="/check-out" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Client Check-out
              </Link>
              <Link to="/today-reservations" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Today's Reservations
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                >
                  <UserCircle size={32} className="text-gray-600" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                        <button
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => {/* Handle profile picture change */}}
                    >
                      <Camera size={16} />
                      Change Profile Picture
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => {/* Handle password change */}}
                    >
                      <Key size={16} />
                      Change Password
                    </button>
                    <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 lg:translate-x-0`}>
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <LayoutDashboard className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/check-in" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <LogIn className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Check-in</span>
              </Link>
            </li>
            <li>
              <Link to="/check-out" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <LogOut className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Check-out</span>
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <BedDouble className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/Receptionist/reservations" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <CalendarCheck className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Reservations</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 ${isSidebarOpen ? 'lg:ml-52' : ''} pt-20`}>
        {children}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Importing specific icons for the medical theme
import { 
  FaUserDoctor, 
  FaHouse, 
  FaUserShield, 
  FaUsers, 
  FaVideo, 
  FaPrescriptionBottleMedical, 
  FaCalendarCheck,
  FaBars,
  FaXmark
} from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define links here to keep JSX clean
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHouse /> },
    { name: "Admin", path: "/admin", icon: <FaUserShield /> },
    { name: "Doctors", path: "/doctors", icon: <FaUserDoctor /> },
    { name: "Patients", path: "/patients", icon: <FaUsers /> },
    { name: "Telemedicine", path: "/telemedicine", icon: <FaVideo /> },
    { name: "Pharmacy", path: "/pharmacy", icon: <FaPrescriptionBottleMedical /> },
    { name: "Reception", path: "/reception", icon: <FaCalendarCheck /> },
  ];

  // Helper class for link styling
  const getLinkClass = ({ isActive }) => {
    const baseClass = "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
    const activeClass = "bg-blue-100 text-blue-700 shadow-sm";
    const inactiveClass = "text-gray-600 hover:bg-gray-100 hover:text-blue-600";

    return isActive ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
              <FaUserDoctor className="text-3xl" />
              <span className="text-xl font-bold tracking-tight text-gray-800">
                Medi<span className="text-blue-600">Care</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={getLinkClass}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-200 hover:text-blue-600"
                }`
              }
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
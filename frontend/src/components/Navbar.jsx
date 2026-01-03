import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Stethoscope,
  Pill,
  Shield,
  ClipboardList,
  Menu,
  X,
  Video,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: null },
    { path: "/admin", label: "Admin", icon: Shield },
    { path: "/doctor", label: "Doctors", icon: Stethoscope },
    { path: "/patient", label: "Patients", icon: Users },
    { path: "/telemedicine", label: "Telemedicine", icon: Video },
    { path: "/pharmacy", label: "Pharmacy", icon: Pill },
    { path: "/reception", label: "Reception", icon: ClipboardList },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2">
              <Stethoscope className="text-white" size={24} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

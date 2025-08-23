import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold px-4 py-2 rounded-md bg-[#E67327] transition-all duration-300'
      : 'text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FF7A00]';

  return (
    <nav className="bg-[#FF8C42] fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              className="h-10 w-auto"
              src={logo}
              alt="Craft Connect Logo"
            />
            <span className="ml-2 text-2xl font-bold text-white">
              Craft Connect
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/add-project" className={linkClass}>
              Post Project
            </NavLink>

            {/* Sign Up / Log In */}
            <NavLink
              to="/signup"
              className="ml-4 px-4 py-2 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-[#FF8C42] transition-all duration-300"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="ml-2 px-4 py-2 rounded-md font-semibold bg-white text-[#FF8C42] hover:bg-[#FF7A00] hover:text-white transition-all duration-300"
            >
              Log In
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 space-y-2 bg-[#FFF4E0] p-4 rounded-md shadow-lg"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 rounded-md bg-[#FF7A00] text-white font-semibold transition-all duration-300'
                    : 'block px-4 py-2 rounded-md text-gray-800 hover:bg-[#FF8C42] hover:text-white transition-all duration-300'
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 rounded-md bg-[#FF7A00] text-white font-semibold transition-all duration-300'
                    : 'block px-4 py-2 rounded-md text-gray-800 hover:bg-[#FF8C42] hover:text-white transition-all duration-300'
                }
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/add-project"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 rounded-md bg-[#FF7A00] text-white font-semibold transition-all duration-300'
                    : 'block px-4 py-2 rounded-md text-gray-800 hover:bg-[#FF8C42] hover:text-white transition-all duration-300'
                }
                onClick={() => setMenuOpen(false)}
              >
                Post Project
              </NavLink>

              <NavLink
                to="/signup"
                className="block px-4 py-2 rounded-md font-semibold border border-gray-800 text-gray-800 hover:bg-[#FF8C42] hover:text-white transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="block px-4 py-2 rounded-md font-semibold bg-[#FF8C42] text-white hover:bg-[#FF7A00] hover:text-white transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

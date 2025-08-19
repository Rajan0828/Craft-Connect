import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FF8C42] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
       
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Craft Connect Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-bold">
            Craft Connect
          </span>
        </Link>

       
        <div className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Craft Connect. All rights
          reserved.
        </div>

      
        <div className="flex space-x-4 text-white">
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

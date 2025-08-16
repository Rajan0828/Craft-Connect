import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[#FFF4E0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/src/assets/images/hero.png"
            alt="Freelance illustration"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Start your Freelance Career
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Find freelance opportunities that match your skills and
            goals. Connect with clients and grow your portfolio.
          </p>
          <Link
            to="/projects"
            className="bg-gradient-to-r from-[#FF8C42] to-[#FF7A00] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 inline-block"
          >
            Browse Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

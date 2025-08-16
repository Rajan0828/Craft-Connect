import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ViewAllProjects = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <motion.div
        whileHover={{
          y: -3,
          boxShadow: '0px 10px 20px rgba(255, 140, 66, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          to="/projects"
          className="block bg-[#FF8C42] text-white text-center py-4 px-6 rounded-xl font-semibold hover:bg-[#FF7A00] transition-colors duration-200"
        >
          Browse All Freelance Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default ViewAllProjects;

import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectListing = ({ project }) => {
  const [showFullDescription, setShowFullDescription] =
    useState(false);

  let description = project.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-6 relative transition-transform hover:-translate-y-1 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="mb-6">
        <div className="text-orange-600 font-medium mb-1">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          {project.title}
        </h3>
      </div>

      <div className="mb-4 text-gray-700">{description}</div>
      <button
        onClick={toggleDescription}
        className="text-[#FF8C42] font-semibold mb-4 hover:text-[#FF7A00] transition-colors duration-200"
      >
        {showFullDescription ? 'Show Less' : 'Show More'}
      </button>

      <h3 className="text-[#FF8C42] font-semibold mb-3">
        {project.salary} / Year
      </h3>

      <div className="border border-gray-200 mb-4"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-0 lg:mb-0">
        <div className="text-gray-700 mb-3 flex items-center">
          <FaMapMarker className="mr-1 text-lg text-[#FF8C42]" />
          {project.location}
        </div>
        <Link
          to={`/projects/${project.id}`}
          className="bg-gradient-to-r from-[#FF8C42] to-[#FF7A00] text-white px-4 py-2 rounded-lg text-center text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectListing;

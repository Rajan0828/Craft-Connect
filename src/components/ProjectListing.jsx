import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectListing = ({ project }) => {
  const [showFullDescription, setShowFullDescription] =
    useState(false);

  const toggleDescription = () =>
    setShowFullDescription((prev) => !prev);

  const description = showFullDescription
    ? project.description
    : project.description.substring(0, 90) + '...';

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-6 relative flex flex-col justify-between h-[400px] transition-transform hover:-translate-y-1 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="mb-4">
        <div className="text-orange-600 font-medium mb-1">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>

        <div className="text-gray-700 text-sm max-h-32 overflow-y-auto pr-2">
          {description}
        </div>
        <button
          onClick={toggleDescription}
          className="text-[#FF8C42] font-semibold mt-2 hover:text-[#FF7A00] transition-colors duration-200 text-sm"
        >
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className="mt-auto">
        <h3 className="text-[#FF8C42] font-semibold mb-2 text-sm">
          {project.salary} / Year
        </h3>
        <div className="flex justify-between items-center">
          <div className="text-gray-700 flex items-center text-sm">
            <FaMapMarker className="mr-1 text-[#FF8C42]" />
            {project.location}
          </div>
          <Link
            to={`/projects/${project._id || project.id}`}
            className="bg-gradient-to-r from-[#FF8C42] to-[#FF7A00] text-white px-4 py-2 rounded-lg text-center text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectListing;

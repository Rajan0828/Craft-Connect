import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96 bg-[#FFF4E0]">
      <FaExclamationTriangle className="text-[#FF8C42] text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4 text-[#FF8C42]">
        404 Not Found
      </h1>
      <p className="text-xl mb-5 text-gray-800">
        This page does not exist
      </p>
      <Link
        to="/"
        className="text-white bg-[#FF8C42] hover:bg-[#FF7A00] rounded-md px-4 py-2 mt-4 transition-colors duration-200"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;

import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { motion } from 'framer-motion';

const HomeCards = () => {
  return (
    <section className="py-12 bg-[#FFF4E0]">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white border border-gray-200 shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                For Freelancers
              </h2>
              <p className="text-gray-700 mb-4">
                Connect with various clients who value your skills and
                expertise.
              </p>
              <Link
                to="/projects"
                className="inline-block bg-gradient-to-r from-[#FF8C42] to-[#FF7A00] text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Browse Freelance Projects
              </Link>
            </Card>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white border border-gray-200 shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                For Clients
              </h2>
              <p className="text-gray-700 mb-4">
                Find talented freelancers who can meet your specific
                needs and requirements.
              </p>
              <Link
                to="/add-project"
                className="inline-block bg-gradient-to-r from-[#FF8C42] to-[#FF7A00] text-white font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add Freelance Projects
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;

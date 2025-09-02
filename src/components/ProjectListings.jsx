import React, { useState, useEffect } from 'react';
import ProjectListing from './ProjectListing';
import LoadingIcon from './LoadingIcon';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectListings = ({ isHome = false }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const limit3 = isHome ? '?limit=3' : '';
      try {
        // const res = await fetch(`/api/projects${limit3}`); //LOCAL DEVELOPMENT
        const API_URL = process.env.REACT_APP_API_URL; //PRODUCTION
        // || 'http://localhost:5000'
        const res = await fetch(`${API_URL}/api/projects${limit3}`); //PRODUCTION

        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log('Error fetching data...', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [isHome]);

  return (
    <section className="bg-[#FFF4E0] px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-[#FF8C42] mb-6 text-center">
          {isHome
            ? 'Recent Freelance Projects'
            : 'Browse Freelance Projects'}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center col-span-full min-h-[300px]">
            <LoadingIcon loading={loading} />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectListing project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectListings;

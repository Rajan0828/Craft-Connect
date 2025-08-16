import React, { useState } from 'react';
import {
  useParams,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProjectPage = ({ updateProjectSubmit }) => {
  const project = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState(project.category);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [salary, setSalary] = useState(project.salary);
  const [location, setLocation] = useState(project.location);
  const [companyName, setCompanyName] = useState(
    project.company.name
  );
  const [companyDescription, setCompanyDescription] = useState(
    project.company.description
  );
  const [contactEmail, setContactEmail] = useState(
    project.company.contactEmail
  );
  const [contactPhone, setContactPhone] = useState(
    project.company.contactPhone
  );

  const submitForm = (e) => {
    e.preventDefault();
    const updateProject = {
      id,
      title,
      category,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateProjectSubmit(updateProject);
    toast.success('Project updated successfully');
    navigate(`/projects/${id}`);
  };

  return (
    <section className="bg-[#FFF4E0] min-h-screen">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-lg rounded-md border border-[#FF8C42]">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6 text-[#FF8C42]">
              Edit Project Listing
            </h2>

            {/* Project Category */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Project Category
              </label>
              <select
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Tech-and-Development">
                  Tech and Development
                </option>
                <option value="Design-and-Creative">
                  Design and Creative
                </option>
                <option value="Writing-and-Translation">
                  Writing and Translation
                </option>
                <option value="Marketing">Marketing</option>
                <option value="Business and Admin">
                  Business and Admin
                </option>
                <option value="Education">Education</option>
                <option value="Other-Services">Other Services</option>
              </select>
            </div>

            {/* Project Title */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Project Title
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                placeholder="eg. Logo Design for Startup Clothing Brand"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Project Description */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Project Description
              </label>
              <textarea
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                rows="4"
                placeholder="Add duties, expectations, requirements, etc."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Salary */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Salary Range
              </label>
              <select
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              >
                <option value="Under $100">Under $100</option>
                <option value="$100 - $250">$100 - $250</option>
                <option value="$250 - $500">$250 - $500</option>
                <option value="$500 - $750">$500 - $750</option>
                <option value="$750 - $1,000">$750 - $1,000</option>
                <option value="$1,000 - $1,500">
                  $1,000 - $1,500
                </option>
                <option value="$1,500 - $2,000">
                  $1,500 - $2,000
                </option>
                <option value="$2,000 - $3,000">
                  $2,000 - $3,000
                </option>
                <option value="$3,000 - $5,000">
                  $3,000 - $5,000
                </option>
                <option value="Over $5,000">Over $5,000</option>
              </select>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Client Profile */}
            <h3 className="text-2xl mb-5 text-[#FF8C42]">
              Client Profile
            </h3>

            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Client/Company
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                placeholder="Company Name"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                About the Client/Company
              </label>
              <textarea
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                rows="4"
                placeholder="What does your company do?"
                required
                value={companyDescription}
                onChange={(e) =>
                  setCompanyDescription(e.target.value)
                }
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-800 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:border-[#FF8C42] focus:ring focus:ring-[#FF8C42]/40"
                placeholder="Optional phone for applicants"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF8C42] hover:bg-[#FF7A00] text-white font-bold py-2 px-4 rounded-full w-full transition-colors duration-200"
            >
              Update Project Listing
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProjectPage;

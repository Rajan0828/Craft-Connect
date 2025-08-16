import { useParams, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProjectPage = ({ deleteProjectSubmit }) => {
  const { id } = useParams();
  const project = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = async (projectId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this project?'
    );
    if (!confirm) return;

    await deleteProjectSubmit(projectId);
    toast.success('Project deleted successfully');
    navigate('/projects');
  };

  return (
    <>
      {/* Go Back */}
      <section className="bg-[#FFF4E0] py-4">
        <div className="container m-auto px-6">
          <Link
            to="/projects"
            className="text-[#FF8C42] hover:text-[#FF7A00] flex items-center font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Back to Freelance Project Listings
          </Link>
        </div>
      </section>

      <section className="bg-[#FFF4E0] py-10">
        <div className="container m-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-orange-700 mb-4 font-semibold">
                  {project.category}
                </div>
                <h1 className="text-3xl font-bold mb-4">
                  {project.title}
                </h1>
                <div className="text-orange-700 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="mr-1" />
                  <p>{project.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">
                  Project Description
                </h3>
                <p className="mb-4">{project.description}</p>

                <h3 className="text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{project.salary} / Year</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2 text-[#FF8C42]">
                  {project.company.name}
                </h2>
                <p className="mb-4">{project.company.description}</p>

                <hr className="my-4 border-gray-200" />

                <h3 className="text-lg font-semibold">
                  Contact Email:
                </h3>
                <p className="my-2 bg-[#FFF0E0] p-2 font-bold rounded">
                  {project.company.contactEmail}
                </p>

                <h3 className="text-lg font-semibold">
                  Contact Phone:
                </h3>
                <p className="my-2 bg-[#FFF0E0] p-2 font-bold rounded">
                  {project.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-4 text-[#FF8C42]">
                  Manage Project
                </h3>
                <Link
                  to={`/edit-project/${project.id}`}
                  className="bg-[#FF8C42] hover:bg-[#FF7A00] text-white font-bold py-2 px-4 rounded-full w-full block text-center mt-2 transition-colors duration-200"
                >
                  Edit Project
                </Link>
                <button
                  onClick={() => onDeleteClick(project.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full block text-center mt-2"
                >
                  Delete Project
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const projectLoader = async ({ params }) => {
  const res = await fetch(`/api/projects/${params.id}`);
  const data = await res.json();
  return data;
};

export { ProjectPage as default, projectLoader };

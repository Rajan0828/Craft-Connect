import {
  useParams,
  useLoaderData,
  Link,
  useNavigate,
} from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProjectPage = ({ deleteProjectSubmit }) => {
  const { id } = useParams();
  const project = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async (projectId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this project?'
    );
    if (!confirmDelete) return;

    await deleteProjectSubmit(projectId);
    toast.success('Project deleted successfully');
    navigate('/projects');
  };

  return (
    <div className="bg-[#FFF4E0] min-h-screen">
      {/* Back Link */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <Link
            to="/projects"
            className="flex items-center font-semibold text-[#FF8C42] hover:text-[#FF7A00] transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Freelance
            Projects
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            {/* Project Details */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <span className="text-orange-700 font-semibold">
                  {project.category}
                </span>
                <h1 className="text-3xl font-bold mt-2">
                  {project.title}
                </h1>
                <div className="flex items-center text-orange-700 mt-2">
                  <FaMapMarker className="mr-2" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">
                  Project Description
                </h2>
                <p className="mb-6">{project.description}</p>

                <h2 className="text-xl font-bold mb-2">Salary</h2>
                <p className="mb-2">{project.salary} / Year</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Company Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#FF8C42] mb-2">
                  {project.company.name}
                </h3>
                <p className="text-gray-700">
                  {project.company.description}
                </p>

                <hr className="my-4 border-gray-200" />

                <div>
                  <h4 className="text-lg font-semibold">
                    Contact Email
                  </h4>
                  <p className="mt-1 bg-[#FFF0E0] p-2 rounded font-bold break-words">
                    {project.company.contactEmail}
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold">
                    Contact Phone
                  </h4>
                  <p className="mt-1 bg-[#FFF0E0] p-2 rounded font-bold">
                    {project.company.contactPhone}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#FF8C42] mb-4">
                  Manage Project
                </h3>
                <Link
                  to={`/edit-project/${project._id}`}
                  className="block w-full text-center bg-[#FF8C42] hover:bg-[#FF7A00] text-white font-bold py-2 rounded-full transition-colors mb-2"
                >
                  Edit Project
                </Link>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full transition-colors"
                >
                  Delete Project
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

// Loader
const API_URL =
  import.meta.env.REACT_APP_API_URL ||
  'https://craft-connect-3.onrender.com';

const projectLoader = async ({ params }) => {
  const res = await fetch(
    // `http://localhost:5000/api/projects/${params.id}`
    `${API_URL}/api/projects/${params.id}`
  );
  if (!res.ok)
    throw new Response('Failed to load project', {
      status: res.status,
    });
  return res.json();
};

export { ProjectPage as default, projectLoader };

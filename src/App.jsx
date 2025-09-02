import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage, { projectLoader } from './pages/ProjectPage';
import PostProjectPage from './pages/AddProjectPage';
import EditProjectPage from './pages/EditProjectPage';

const App = () => {
  const API_URL =
    import.meta.env.REACT_APP_API_URL ||
    'https://craft-connect-3.onrender.com';

  // Add New Project
  const postProjectSubmit = async (newProject) => {
    await fetch(`${API_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });
  };

  // Delete Project
  const deleteProjectSubmit = async (id) => {
    await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'DELETE',
    });
  };

  // Update Project
  const updateProjectSubmit = async (project) => {
    await fetch(`${API_URL}/api/projects/${project._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/add-project"
          element={
            <PostProjectPage postProjectSubmit={postProjectSubmit} />
          }
        />
        <Route
          path="/edit-project/:id"
          element={
            <EditProjectPage
              updateProjectSubmit={updateProjectSubmit}
            />
          }
          loader={projectLoader}
        />
        <Route
          path="/projects/:id"
          element={
            <ProjectPage deleteProjectSubmit={deleteProjectSubmit} />
          }
          loader={projectLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

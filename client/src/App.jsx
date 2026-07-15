import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { toast } from 'sonner';
import LoginPage from './Pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import AddUser from './Pages/AddUser';
import EditUserPage from './Pages/EditUserPage';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const addUser = async (newUser) => {
  const token = localStorage.getItem('token');

  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newUser),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to add user!');
  }

  return await res.json();
};

const updateUser = async (userId, updatedUser) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedUser),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to update user');
  }

  return await res.json();
};

const deleteUser = async (id) => {
  const token = localStorage.getItem('token');

  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to Delete the user!');
  }

  return res;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage deleteUser={deleteUser} />} />
        <Route path="add-user" element={<AddUser submitNewUser={addUser} />} />
        <Route
          path="edit-user/:id"
          element={<EditUserPage submitUpdatedUser={updateUser} />}
        />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <RouterProvider router={router} />
        </div>
        <Toaster richColors closeButton position="top-right" />
      </ThemeProvider>
    </>
  );
};
export default App;

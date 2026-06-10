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
import Playground from './Pages/Playground';
import AddUser from './Pages/AddUser';
import EditUserPage from './Pages/EditUserPage';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const addUser = async (newUser) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  return res;
};

const updateUser = async (id, updatedUser) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });
  if (!res.ok) {
    throw new error('Failed to update user!');
  }
  return res;
};

const deleteUser = async (id) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Failed to Delete the user!');
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
        <Route path="playground" element={<Playground />} />
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

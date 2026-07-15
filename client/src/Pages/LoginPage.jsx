import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem(
          'user',
          JSON.stringify({
            _id: data._id,
            name: data.name,
            email: data.email,
          })
        );

        toast.success('Logged in successfully!');
        navigate('/');
      } else {
        toast.error(data.message || 'SomeThing went wrong!');
      }
    } catch (error) {
      toast.error('Server error!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-5 border border-gray-300 rounded-lg dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2.5 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

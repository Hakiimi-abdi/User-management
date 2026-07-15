import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const EditUserPage = ({ submitUpdatedUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const [name, setName] = useState(user?.name || '');
  const [username, setUserName] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(user?.phone || '');
  const [website, setWebsite] = useState(user?.website || user?.Website || '');
  const [city, setCity] = useState(user?.address?.city || '');
  const [company, setCompany] = useState(user?.company?.name || '');

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      username,
      email,
      phone,
      website,
      address: { city },
      company: { name: company },
    };
    if (password.trim() !== '') {
      updatedUser.password = password;
    }

    try {
      await submitUpdatedUser(user._id, updatedUser);
      toast.success('User updated successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to update user!');
    }
  };

  return (
    <section className="bg-indigo-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="container m-auto max-w-3xl py-24">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 mb-4 shadow-md rounded-md border border-gray-200 dark:border-gray-700 m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6 text-gray-900 dark:text-white">
              Edit User
            </h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-indigo-500"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                New Password (leave blank to keep current)
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-indigo-500"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="website"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                value={website}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={company}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline transition-colors"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditUserPage;

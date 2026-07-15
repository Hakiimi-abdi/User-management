import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AddUser = ({ submitNewUser }) => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      username,
      email,
      password,
      phone,
      city,
      website,
      company,
    };

    try {
      await submitNewUser(newUser);

      toast.success('User Added Successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Failed to add user');
    }
  };

  return (
    <section className="bg-indigo-50 dark:bg-gray-955 transition-colors duration-200">
      <div className="container m-auto max-w-3xl py-24">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 mb-4 shadow-md rounded-md border border-gray-200 dark:border-gray-700 m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6 text-gray-900 dark:text-white">
              Add User
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
                name="name"
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
                name="userName"
                id="userName"
                required
                value={username}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-indigo-500"
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
                name="email"
                id="email"
                required
                value={email}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
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
                name="city"
                id="city"
                required
                value={city}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
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
                name="phone"
                id="phone"
                required
                value={phone}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-indigo-500"
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
                name="website"
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
                name="companyName"
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
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddUser;

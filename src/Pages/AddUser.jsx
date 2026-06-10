import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Navigate, useNavigate } from 'react-router-dom';

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
      address: { city },
      website,
      company: { name: company },
    };

    await submitNewUser(newUser);

    navigate('/');

    toast.success('User added successfully!');
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-3xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add user
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                className="border rounded w-full py-2 px-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                UserName
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border rounded w-full py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 font-bold mb-2"
              >
                City
              </label>
              <input
                name="text"
                id="city"
                className="border rounded w-full py-2 px-3"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="website"
                className="block text-gray-700 font-bold mb-2"
              >
                Website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                value={website}
                className="border rounded w-full py-2 px-3"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-bold mb-2"
              >
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={company}
                className="border rounded w-full py-2 px-3"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
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

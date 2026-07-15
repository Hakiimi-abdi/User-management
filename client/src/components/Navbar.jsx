import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();

  const Links = [
    { text: 'Home', path: '/' },
    { text: 'Add User', path: '/add-user' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <nav className="p-5 bg-[#f4f4f4] dark:bg-gray-800 flex items-center justify-between transition-colors shadow-sm">
      <div className="flex items-center gap-5">
        {Links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-400 transition-colors'
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div>
        <ThemeToggle />
        <button
          onClick={handleLogout}
          className="ml-5 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-offset-slate-900"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

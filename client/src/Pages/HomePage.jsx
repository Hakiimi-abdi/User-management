import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'sonner';

const HomePage = ({ deleteUser }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch('/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUsers(data);
        } else {
          toast.error(data.message || 'Failed to fetch users');
        }
      } catch (error) {
        toast.error('Error while fetching users!');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const search = () => {
    return users.filter((user) => {
      const term = searchTerm.toLowerCase();

      return (
        user.name?.toLowerCase().includes(term) ||
        user.email?.toLowerCase().includes(term) ||
        user.role?.toLowerCase().includes(term) ||
        user.username?.toLowerCase().includes(term)
      );
    });
  };

  const onClickDelete = async (userid) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this user?'
    );

    if (!confirm) return;

    try {
      await deleteUser(userid);

      const storedUser = localStorage.getItem('user');
      const currentUser = storedUser ? JSON.parse(storedUser) : null;

      if (currentUser && currentUser._id === userid) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        toast.success('Your account has been deleted. Logging out...');
        navigate('/login');
        return;
      }

      setUsers((prev) => prev.filter((user) => user._id !== userid));
      toast.success('User Deleted successfully!');
    } catch (error) {
      toast.error('Failed to Delete the user!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          User Information
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          className="w-full p-3 mb-6 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner loading={loading} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {search().map((user, index) => (
              <div
                key={user._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </h2>
                    {user.username && (
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        @{user.username}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Role:
                    </span>{' '}
                    {user.role || 'User'}
                  </p>

                  <p>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Email:
                    </span>{' '}
                    {user.email}
                  </p>

                  {user.phone && (
                    <p>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        Phone:
                      </span>{' '}
                      {user.phone}
                    </p>
                  )}

                  {user.website && (
                    <p>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        Website:
                      </span>{' '}
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline break-all"
                      >
                        {user.website}
                      </a>
                    </p>
                  )}

                  {user.company?.name && (
                    <p>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        Company:
                      </span>{' '}
                      {user.company.name}
                    </p>
                  )}

                  {user.address?.city && (
                    <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="font-medium text-gray-800 dark:text-gray-200 italic">
                        Address:
                      </p>
                      <p>{user.address.city}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    type="button"
                    className="bg-blue-600 text-white font-bold hover:bg-blue-400 py-2 px-2 flex-1 rounded-full focus:outline-none"
                    onClick={() =>
                      navigate(`/edit-user/${user._id}`, {
                        state: { user },
                      })
                    }
                  >
                    Edit user
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full flex-1 focus:outline-none focus:shadow-outline"
                    onClick={() => onClickDelete(user._id)}
                  >
                    Delete user
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

import { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sleep', completed: false },
    { id: 2, text: 'Go To Work', completed: false },
    { id: 3, text: 'Workout', completed: false },
  ]);
  const [newtask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (newtask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newtask, completed: false }]);
    setNewTask('');
  };

  const completedTasks = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-4">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleInputChange}
          className="flex-1 text-lg p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
        />
        <button
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors duration-200"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completedTasks(task.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <span
                className={`text-xl font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'} `}
              >
                {task.text}
              </span>
            </div>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded transition-colors duration-200"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;

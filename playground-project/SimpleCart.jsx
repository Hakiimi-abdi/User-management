import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const SimpleCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: 'Banana', completed: false },
    { id: 2, text: 'Onion', completed: false },
    { id: 3, text: 'Apple', completed: false },
  ]);
  const [addedItem, setAddedItem] = useState('');

  const handleInputChanges = (e) => {
    setAddedItem(e.target.value);
  };

  const handleAddingItems = () => {
    if (addedItem.trim() === '') return;
    setItems([...items, { id: Date.now(), text: addedItem, completed: false }]);
    setAddedItem('');
  };

  const handleToggleCheckBox = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteItems = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const toggleItems = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex justify-end p-8 text-blue-700">
        <FaShoppingCart className="cursor-pointer" onClick={toggleItems} />
      </div>
      <input
        type="text"
        value={addedItem}
        onChange={handleInputChanges}
        className="flex-1 text-lg p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
      />
      <button
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors duration-200"
        onClick={handleAddingItems}
      >
        Add
      </button>
      {isOpen &&
        items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              checked={item.completed}
              className="w-5 h-5 cursor-pointer"
              onChange={() => handleToggleCheckBox(item.id)}
            />
            <span
              className={` text-xl font-semibold ${item.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
            >
              {item.text}
            </span>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded transition-colors duration-200"
              onClick={() => handleDeleteItems(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </>
  );
};

export default SimpleCart;

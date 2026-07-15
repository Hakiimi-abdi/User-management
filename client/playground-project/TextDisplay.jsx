import { useState } from 'react';

const TextDisplay = () => {
  const [name, setName] = useState('');

  const hadleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleClearInput = () => {
    setName('');
  };
  return (
    <div className="mx-5">
      <input
        type="text"
        value={name}
        className="w-52 bg-white border"
        onChange={hadleNameChange}
      />
      <p className=" ml-5 mb-5">Name: {name}</p>
      <button
        className="bg-blue-500 h-12.5 w-32 mb-5 text-white"
        onClick={handleClearInput}
      >
        Clear
      </button>
    </div>
  );
};

export default TextDisplay;

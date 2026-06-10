import { useState } from 'react';

const SimpleProfileForm = () => {
  const [details, setDetails] = useState({ name: '', email: '', favColor: '' });

  const handleFormChanges = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setDetails({
      ...details,
      [inputName]: inputValue,
    });
  };
  const handleClearFields = () => {
    setDetails({ name: '', email: '', favColor: '' });
  };
  return (
    <>
      <div className="bg-indigo-500 p-8">
        <input
          type="text"
          name="name"
          value={details.name}
          className="border outline-red-400 text-white"
          onChange={handleFormChanges}
        />
        <p>{details.name}</p>
        <br />
        <input
          type="email"
          name="email"
          value={details.email}
          className="border outline-red-400 text-white mt-4"
          onChange={handleFormChanges}
        />

        <p>{details.email}</p>
        <br />
        <input
          type="text"
          name="favColor"
          value={details.favColor}
          className="border outline-red-400 text-white mt-4 mb-4"
          onChange={handleFormChanges}
        />
        <p>{details.favColor}</p>
        <br />
        <button
          className="bg-indigo-400 text-white h-full w-46 hover:bg-orange-500"
          onClick={handleClearFields}
        >
          clear
        </button>
      </div>
    </>
  );
};

export default SimpleProfileForm;

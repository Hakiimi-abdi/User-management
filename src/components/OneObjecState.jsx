import { useState } from 'react';

const OneObjecState = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');

  //first try
  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //second try
  const [details, setDetails] = useState({
    name: '',
    email: '',
  });
  const handleChanges = (e) => {
    const inputName = e.target.name;

    const inputVlue = e.target.value;

    setDetails({
      ...details,
      [inputName]: inputVlue,
    });
  };

  const handleclearInputs = () => {
    setDetails({ name: '', email: '' });
  };
  return (
    <>
      <div className="bg-white p-8">
        <input
          type="text"
          name="name"
          value={details.name}
          className="border outline-indigo-500"
          onChange={handleChanges}
        />
        <p>{details.name}</p>
        <br />
        <input
          type="email"
          name="email"
          value={details.email}
          className="border outline-indigo-500 mt-4 mb-4"
          onChange={handleChanges}
        />
        <p>{details.email}</p>
        <br />
        <button
          className="bg-indigo-400 text-white h-full w-46 hover:bg-orange-500"
          onClick={handleclearInputs}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default OneObjecState;

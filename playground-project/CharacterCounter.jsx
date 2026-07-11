import { useState } from 'react';

const CharacterCounter = () => {
  const [bio, setBio] = useState('');

  const handleBioChange = (e) => {
    const newText = e.target.value;

    if (newText.length < 100) {
      setBio(newText);
    }
  };

  const handleClearInput = () => {
    setBio('');
  };
  return (
    <>
      <div className="bg-amber-100 p-8">
        <label htmlFor="bio">Bio:</label>
        <br />
        <textarea
          name="bio"
          value={bio}
          className="bg-white"
          onChange={handleBioChange}
        ></textarea>
        <p>{100 - bio.length} characters left</p>
        <br />
        <button
          className="bg-blue-400 text-white w-37.5 h-12.5 text-[1.5rem] cursor-pointer"
          onClick={handleClearInput}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default CharacterCounter;

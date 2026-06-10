import { useState } from 'react';

const Box = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColors = () => {
    setIsRed(!isRed);
  };
  return (
    <>
      {isRed}
      <div
        className={
          isRed
            ? 'bg-red-500 h-32 w-3s2 mx-5 my-5 text-center'
            : 'bg-blue-700 h-32 w-3s2 mx-5 my-5 text-center'
        }
      >
        Box
      </div>
      <button
        className="bg-blue-500 h-12.5 w-32 ml-52 mb-5"
        onClick={toggleColors}
      >
        {isRed ? 'Turn blue' : 'turn red'}
      </button>
    </>
  );
};

export default Box;

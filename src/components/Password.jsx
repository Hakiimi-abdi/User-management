import { useState } from 'react';

const Password = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPassword = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="mx-5 mb-5">
        <input
          type={isVisible ? 'text' : 'password'}
          className="w-52 bg-white border"
        />
        <button
          className="bg-blue-500 h-8 w-32 ml-5 mb-5"
          onClick={showPassword}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  );
};

export default Password;

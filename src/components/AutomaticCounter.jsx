import { useState, useEffect } from 'react';

const AutomaticCounter = () => {
  let [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };
  const handleStop = () => {
    setIsActive(false);
    setCount(0);
  };
  return (
    <div className="text-center p-4">
      <p className="text-2xl font-black">{count}</p>
      <button
        className="bg-blue-500 text-white border-none p-4"
        onClick={handleStart}
        disabled={isActive}
      >
        {isActive ? 'Running...' : 'Start'}
      </button>
      <button
        className="bg-blue-500 text-white border-none p-4 ml-4"
        onClick={handleStop}
      >
        Stop & Reset
      </button>
    </div>
  );
};

export default AutomaticCounter;

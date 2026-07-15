import { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);

  const Incrementcount = () => {
    setCount(count++);
  };
  const Decrementcount = () => {
    setCount(count--);
  };
  const Resetcount = () => {
    setCount(0);
  };
  return (
    <div className="bg-white text-center p-8">
      <p className="font-bold text-5xl mb-4">{count}</p>
      {/* {setCount === count ? count : "Counter can't be less than 0"} */}
      <button
        className="bg-blue-400 text-white w-37.5 h-12.5 text-[1.5rem] mx-5"
        onClick={Incrementcount}
      >
        Increment
      </button>
      <button
        className="bg-blue-400 text-white w-37.5 h-12.5 text-[1.5rem] mx-5"
        onClick={Resetcount}
      >
        Reset
      </button>
      <button
        className="bg-blue-400 text-white w-37.5 h-12.5 text-[1.5rem] mx-5"
        onClick={Decrementcount}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;

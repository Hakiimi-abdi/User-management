import { useState, useEffect } from 'react';

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  return (
    <div>
      <p>Windows height: {height}</p>
      <p>Windows width: {width}</p>
    </div>
  );
};

export default WindowSize;

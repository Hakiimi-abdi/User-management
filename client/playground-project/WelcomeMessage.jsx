import { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>{showMessage && <h2>Welcome back 🖐️</h2>}</div>;
};

export default WelcomeMessage;

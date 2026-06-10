import { useState } from 'react';

const SimpleTab = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Links = [
    { text: 'About', content: 'This is for Tab one' },
    { text: 'Skills', content: 'This is for Tab two' },
    { text: 'Contact', content: 'This is for Tab Three' },
  ];
  return (
    <>
      <div className="flex justify-between items-center gap-8 p-8">
        {Links.map((link, index) => (
          <div
            className="bg-[#cec7c7b0] w-80 p-4 text-center hover:bg-green-400 cursor-pointer"
            key={index}
          >
            <button
              onClick={() => {
                toggleBox(index);
              }}
            >
              {link.text}
            </button>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div className="bg-white mx-5 p-8 border">
          <h1>{Links[openIndex].text}</h1>
          <p>{Links[openIndex].content}</p>
        </div>
      )}
    </>
  );
};

export default SimpleTab;

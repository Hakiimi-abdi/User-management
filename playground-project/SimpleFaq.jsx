import React from 'react';
import { useState } from 'react';

const SimpleFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces',
    },
    {
      question: 'Why use React?',
      answer:
        "It's component-based, fast with Virtual DOM, and has a huge ecosystem.",
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX is a syntax extension that allows writing HTML-like code in JavaScript.',
    },
    {
      question: 'What is state in React?',
      answer:
        'State is data that can change over time and causes components to re-render.',
    },
  ];
  return (
    <div className="flex flex-col gap-5 mt-5">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black p-2 rounded-lg mx-5 h-55"
        >
          <h1 className="text-2xl font-bold">{item.question}</h1>
          {openIndex === index && <p className="mt-3">{item.answer}</p>}

          <button
            className="bg-indigo-500 h-12 w-full hover:bg-indigo-600 text-white px-4 mt-16 rounded-lg"
            onClick={() => {
              toggleAnswer(index);
            }}
          >
            {openIndex === index ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SimpleFaq;

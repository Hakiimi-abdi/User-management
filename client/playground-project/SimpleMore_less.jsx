import { useState } from 'react';

const DescriptionCard = ({ card }) => {
  const [showDescription, setShowDescription] = useState(false);
  let description = card.description;
  if (!showDescription) {
    description = description.substring(0, 50) + '...';
  }

  return (
    <div className="bg-white p-6 mb-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <h1 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h1>
      <p className="text-gray-600 text-sm mb-4 grow">{description}</p>
      <button
        className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer self-start"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        {showDescription ? 'Less' : 'More'}
      </button>
    </div>
  );
};

const SimpleMore_less = () => {
  const cards = [
    {
      id: 1,
      title: 'React',
      description:
        'React is a UI library created by Facebook. It uses a virtual DOM for performance and has a component-based architecture that makes code reusable.',
    },
    {
      id: 2,
      title: 'State',
      description:
        'State holds data that can change over time. When state updates, React re-renders the component to show the new data.',
    },
    {
      id: 3,
      title: 'Props',
      description:
        'Props are read-only data passed from parent to child components. They help make components reusable and configurable.',
    },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {cards.map((card) => (
        <DescriptionCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default SimpleMore_less;

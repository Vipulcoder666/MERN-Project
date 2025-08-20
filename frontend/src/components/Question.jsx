// src/components/Question.jsx
const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-medium">{question}</h3>
      <div className="mt-2 space-y-2">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onAnswer(opt)}
            className="w-full px-3 py-2 border rounded-lg hover:bg-gray-100"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

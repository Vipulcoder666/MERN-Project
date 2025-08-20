// src/components/Question.jsx
export default function Question({ question }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((opt, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input type="radio" name={`q-${question.id}`} value={opt} className="form-radio" />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

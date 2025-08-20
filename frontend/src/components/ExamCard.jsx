// src/components/ExamCard.jsx
const ExamCard = ({ title, description, onStart }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        onClick={onStart}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Exam
      </button>
    </div>
  );
};

export default ExamCard;

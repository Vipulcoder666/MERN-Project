// src/components/ExamCard.jsx
export default function ExamCard({ exam }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{exam.title}</h2>
      <p className="text-gray-600">{exam.description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Start Quiz
      </button>
    </div>
  );
}

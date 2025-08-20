// src/pages/ExamPage.jsx
import { useParams } from "react-router-dom";
import Question from "../components/Question";

export default function ExamPage() {
  const { id } = useParams();
  const questions = [
    { id: 1, text: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: "4" },
    { id: 2, text: "Who discovered gravity?", options: ["Newton", "Einstein", "Tesla", "Edison"], answer: "Newton" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Exam #{id}</h1>
      <div className="space-y-6">
        {questions.map((q) => (
          <Question key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}

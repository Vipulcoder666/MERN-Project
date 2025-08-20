// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import ExamCard from "../components/ExamCard";

export default function Dashboard() {
  const exams = [
    { id: 1, title: "Math Quiz", description: "Algebra & Geometry basics" },
    { id: 2, title: "Science Quiz", description: "Physics & Chemistry" },
    { id: 3, title: "History Quiz", description: "World History MCQs" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exams.map((exam) => (
          <Link to={`/exam/${exam.id}`} key={exam.id}>
            <ExamCard exam={exam} />
          </Link>
        ))}
      </div>
    </div>
  );
}

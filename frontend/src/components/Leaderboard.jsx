// src/components/Leaderboard.jsx
export default function Leaderboard() {
  const leaderboard = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 88 },
    { name: "Charlie", score: 76 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Leaderboard</h1>
      <div className="bg-white rounded-xl shadow-md max-w-lg mx-auto p-6">
        <ul className="divide-y">
          {leaderboard.map((player, index) => (
            <li key={index} className="flex justify-between py-3">
              <span className="font-medium">{player.name}</span>
              <span className="text-blue-600">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

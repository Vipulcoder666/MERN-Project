// src/components/Leaderboard.jsx
const Leaderboard = ({ scores }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-3">Leaderboard</h2>
      <ul>
        {scores.map((s, i) => (
          <li
            key={i}
            className="flex justify-between py-2 border-b last:border-none"
          >
            <span>{s.name}</span>
            <span className="font-bold">{s.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

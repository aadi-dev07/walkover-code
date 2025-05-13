
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";

const Leaderboard = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <LeaderboardTable />
    </div>
  );
};

export default Leaderboard;

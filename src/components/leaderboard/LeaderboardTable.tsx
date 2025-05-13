
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Trophy, Award, Medal } from "lucide-react";

type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  score: number;
  problemsSolved: number;
  accuracy: number;
};

// Sample leaderboard data
const leaderboardData: LeaderboardEntry[] = [
  {
    id: "1",
    rank: 1,
    name: "John Doe",
    score: 980,
    problemsSolved: 45,
    accuracy: 98,
  },
  {
    id: "2",
    rank: 2,
    name: "Jane Smith",
    score: 925,
    problemsSolved: 42,
    accuracy: 95,
  },
  {
    id: "3",
    rank: 3,
    name: "Alex Johnson",
    score: 890,
    problemsSolved: 40,
    accuracy: 92,
  },
  {
    id: "4",
    rank: 4,
    name: "Robert Williams",
    score: 845,
    problemsSolved: 38,
    accuracy: 89,
  },
  {
    id: "5",
    rank: 5,
    name: "Emily Davis",
    score: 810,
    problemsSolved: 37,
    accuracy: 87,
  },
  {
    id: "6",
    rank: 6,
    name: "Michael Brown",
    score: 780,
    problemsSolved: 35,
    accuracy: 84,
  },
  {
    id: "7",
    rank: 7,
    name: "Lisa Wilson",
    score: 760,
    problemsSolved: 34,
    accuracy: 82,
  },
  {
    id: "8",
    rank: 8,
    name: "David Miller",
    score: 740,
    problemsSolved: 33,
    accuracy: 80,
  },
  {
    id: "9",
    rank: 9,
    name: "Sarah Taylor",
    score: 720,
    problemsSolved: 32,
    accuracy: 78,
  },
  {
    id: "10",
    rank: 10,
    name: "Kevin Moore",
    score: 700,
    problemsSolved: 31,
    accuracy: 76,
  },
];

export function LeaderboardTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = leaderboardData.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return rank;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Top Performers</h2>
        <Input
          placeholder="Search candidates..."
          className="max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableCaption>Ranking of all candidates based on their performance</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Problems Solved</TableHead>
              <TableHead className="text-right">Accuracy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((entry) => (
              <TableRow key={entry.id} className={entry.rank <= 3 ? "font-medium" : ""}>
                <TableCell className="font-medium">
                  <div className="flex items-center justify-center">
                    {getRankIcon(entry.rank)}
                  </div>
                </TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell className="text-right">{entry.score}</TableCell>
                <TableCell className="text-right">{entry.problemsSolved}</TableCell>
                <TableCell className="text-right">{entry.accuracy}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

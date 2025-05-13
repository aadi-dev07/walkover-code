
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "70%",
    topics: ["Arrays", "Hash Table"]
  },
  {
    id: 2,
    title: "Reverse Linked List",
    difficulty: "Easy",
    acceptance: "65%",
    topics: ["Linked List", "Recursion"]
  },
  {
    id: 3,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    acceptance: "55%",
    topics: ["Tree", "BFS"]
  },
  {
    id: 4,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    acceptance: "42%",
    topics: ["Heap", "Linked List", "Divide & Conquer"]
  },
  {
    id: 5,
    title: "Valid Parentheses",
    difficulty: "Easy",
    acceptance: "75%",
    topics: ["Stack", "String"]
  },
  {
    id: 6,
    title: "Maximum Subarray",
    difficulty: "Medium",
    acceptance: "60%",
    topics: ["Array", "Dynamic Programming"]
  },
  {
    id: 7,
    title: "LRU Cache",
    difficulty: "Medium",
    acceptance: "38%",
    topics: ["Hash Table", "Linked List", "Design"]
  },
  {
    id: 8,
    title: "Word Search II",
    difficulty: "Hard",
    acceptance: "30%",
    topics: ["Trie", "DFS", "Backtracking"]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "Hard":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

export function ProblemsList() {
  const [filter, setFilter] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  const filteredProblems = problems.filter(
    (problem) =>
      (filter === "" ||
        problem.title.toLowerCase().includes(filter.toLowerCase()) ||
        problem.topics.some((topic) =>
          topic.toLowerCase().includes(filter.toLowerCase())
        )) &&
      (difficulty === "all" || problem.difficulty === difficulty)
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Problems</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search problems or topics..."
            className="pl-8"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="w-28">Difficulty</TableHead>
              <TableHead className="w-28 text-center">Acceptance</TableHead>
              <TableHead>Topics</TableHead>
              <TableHead className="w-24 text-center">Solve</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProblems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell className="font-medium text-center">
                  {problem.id}
                </TableCell>
                <TableCell>{problem.title}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                </TableCell>
                <TableCell className="text-center">{problem.acceptance}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {problem.topics.map((topic) => (
                      <Badge key={topic} variant="outline">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Button asChild size="sm">
                    <Link to={`/problem/${problem.id}`}>Solve</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

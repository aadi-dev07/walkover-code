
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for candidates
const candidates = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Frontend Developer",
    score: 85,
    testsCompleted: 2,
    status: "Evaluated",
    submittedAt: "2023-05-10T14:30:00",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Backend Developer",
    score: 92,
    testsCompleted: 3,
    status: "Evaluated",
    submittedAt: "2023-05-09T10:15:00",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Full Stack Developer",
    score: 78,
    testsCompleted: 2,
    status: "In Progress",
    submittedAt: "2023-05-11T16:45:00",
  },
  {
    id: 4,
    name: "David Miller",
    email: "david@example.com",
    role: "DevOps Engineer",
    score: 88,
    testsCompleted: 1,
    status: "Evaluated",
    submittedAt: "2023-05-08T09:30:00",
  },
  {
    id: 5,
    name: "Eve Wilson",
    email: "eve@example.com",
    role: "Mobile Developer",
    score: 76,
    testsCompleted: 2,
    status: "Not Started",
    submittedAt: "",
  },
];

// Mock data for problems
const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    usedInTests: 12,
    avgScore: 82,
    dateAdded: "2023-04-01",
  },
  {
    id: 2,
    title: "Reverse Linked List",
    difficulty: "Easy",
    usedInTests: 10,
    avgScore: 75,
    dateAdded: "2023-04-03",
  },
  {
    id: 3,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    usedInTests: 8,
    avgScore: 68,
    dateAdded: "2023-04-05",
  },
  {
    id: 4,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    usedInTests: 5,
    avgScore: 60,
    dateAdded: "2023-04-10",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Evaluated":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Not Started":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Total Candidates</CardTitle>
            <CardDescription>Active candidates in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{candidates.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Evaluated Submissions</CardTitle>
            <CardDescription>Completed evaluations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {
                candidates.filter((c) => c.status === "Evaluated").length
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Average Score</CardTitle>
            <CardDescription>Across all evaluations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {Math.round(
                candidates.reduce((acc, curr) => acc + curr.score, 0) /
                  candidates.length
              )}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="candidates" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex mb-4">
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="problems">Problems</TabsTrigger>
        </TabsList>

        <TabsContent value="candidates" className="mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search candidates..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button>
                <Plus className="h-4 w-4 mr-1" /> Invite Candidates
              </Button>
              <Button variant="outline">
                <FileDown className="h-4 w-4 mr-1" /> Export
              </Button>
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="text-center">Tests</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCandidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-muted-foreground">{candidate.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{candidate.role}</TableCell>
                    <TableCell className="text-center">
                      <div className="font-medium">{candidate.score}%</div>
                    </TableCell>
                    <TableCell className="text-center">{candidate.testsCompleted}</TableCell>
                    <TableCell>
                      <Badge
                        className={getStatusColor(candidate.status)}
                        variant="outline"
                      >
                        {candidate.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {candidate.submittedAt
                        ? new Date(candidate.submittedAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="problems" className="mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Problem Library</h2>
            <Button>
              <Plus className="h-4 w-4 mr-1" /> Add Problem
            </Button>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="text-center">Used In Tests</TableHead>
                  <TableHead className="text-center">Avg. Score</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((problem) => (
                  <TableRow key={problem.id}>
                    <TableCell>{problem.id}</TableCell>
                    <TableCell>
                      <div className="font-medium">{problem.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getDifficultyColor(problem.difficulty)}
                        variant="outline"
                      >
                        {problem.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">{problem.usedInTests}</TableCell>
                    <TableCell className="text-center">{problem.avgScore}%</TableCell>
                    <TableCell>{problem.dateAdded}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

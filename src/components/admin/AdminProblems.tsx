
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { AddProblemForm } from "./forms/AddProblemForm";

export function AdminProblems() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock problem data
  const problems = [
    {
      id: "1",
      title: "Two Sum",
      difficulty: "Easy",
      submissions: 145,
      success: "78%",
      added: "4/15/2023"
    },
    {
      id: "2",
      title: "Merge Intervals",
      difficulty: "Medium",
      submissions: 98,
      success: "62%",
      added: "4/20/2023"
    },
    {
      id: "3",
      title: "LRU Cache",
      difficulty: "Hard",
      submissions: 56,
      success: "45%",
      added: "4/25/2023"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full max-w-md">
          <Input type="text" placeholder="Search problems..." className="w-full" />
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Problem
          </Button>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Problem</DialogTitle>
            </DialogHeader>
            <AddProblemForm onSuccess={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Submissions</TableHead>
              <TableHead>Success Rate</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell className="font-medium">{problem.title}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    problem.difficulty === "Easy" 
                      ? "bg-green-50 text-green-700" 
                      : problem.difficulty === "Medium"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-700"
                  }`}>
                    {problem.difficulty}
                  </div>
                </TableCell>
                <TableCell>{problem.submissions}</TableCell>
                <TableCell>{problem.success}</TableCell>
                <TableCell>{problem.added}</TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 h-auto">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

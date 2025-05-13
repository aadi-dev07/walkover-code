
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, FileDown } from "lucide-react";
import { InviteCandidateForm } from "./forms/InviteCandidateForm";

export function AdminCandidates() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleExport = () => {
    // Mock export functionality
    const element = document.createElement("a");
    const mockData = "data:text/csv;charset=utf-8,Name,Email,Status\nJohn Doe,john@example.com,Pending\nJane Smith,jane@example.com,Completed";
    element.setAttribute("href", mockData);
    element.setAttribute("download", "candidates.csv");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Mock candidate data
  const candidates = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Frontend Developer",
      score: "85%",
      tests: 2,
      status: "Evaluated",
      submitted: "5/10/2023"
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      role: "Backend Developer",
      score: "92%",
      tests: 3,
      status: "Evaluated",
      submitted: "5/9/2023"
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Full Stack Developer",
      score: "78%",
      tests: 2,
      status: "In Progress",
      submitted: "5/11/2023"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full max-w-md">
          <Input type="text" placeholder="Search candidates..." className="w-full" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Invite Candidates
            </Button>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Invite Candidate</DialogTitle>
              </DialogHeader>
              <InviteCandidateForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Tests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.email}>
                <TableCell>
                  <div>
                    <div className="font-medium">{candidate.name}</div>
                    <div className="text-sm text-muted-foreground">{candidate.email}</div>
                  </div>
                </TableCell>
                <TableCell>{candidate.role}</TableCell>
                <TableCell>{candidate.score}</TableCell>
                <TableCell>{candidate.tests}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    candidate.status === "Evaluated" 
                      ? "bg-green-50 text-green-700" 
                      : "bg-blue-50 text-blue-700"
                  }`}>
                    {candidate.status}
                  </div>
                </TableCell>
                <TableCell>{candidate.submitted}</TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 h-auto">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

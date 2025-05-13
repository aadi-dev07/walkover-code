
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Manage Candidates</h2>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Invite Candidate
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Invite Candidate</DialogTitle>
                <DialogDescription>
                  Send an invitation to a candidate to take the DSA assessment.
                </DialogDescription>
              </DialogHeader>
              <InviteCandidateForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          Candidates management dashboard would display here.
        </div>
      </Card>
    </div>
  );
}


import { Card } from "@/components/ui/card";

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold">Total Candidates</h3>
        <p className="text-muted-foreground text-sm">Active candidates in the system</p>
        <p className="text-5xl font-bold mt-4">5</p>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold">Evaluated Submissions</h3>
        <p className="text-muted-foreground text-sm">Completed evaluations</p>
        <p className="text-5xl font-bold mt-4">3</p>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold">Average Score</h3>
        <p className="text-muted-foreground text-sm">Across all evaluations</p>
        <p className="text-5xl font-bold mt-4">84%</p>
      </Card>
    </div>
  );
}

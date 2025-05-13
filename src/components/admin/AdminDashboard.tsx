
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminCandidates } from "./AdminCandidates";
import { AdminProblems } from "./AdminProblems";
import { AdminStats } from "./AdminStats";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("candidates");

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>

        <AdminStats />

        <Tabs defaultValue="candidates" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="problems">Problems</TabsTrigger>
          </TabsList>
          
          <TabsContent value="candidates">
            <AdminCandidates />
          </TabsContent>
          
          <TabsContent value="problems">
            <AdminProblems />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

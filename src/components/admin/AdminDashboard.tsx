
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminCandidates } from "./AdminCandidates";
import { AdminProblems } from "./AdminProblems";
import { AdminStats } from "./AdminStats";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("problems");

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>

        <Tabs defaultValue="problems" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="problems">
            <AdminProblems />
          </TabsContent>
          
          <TabsContent value="candidates">
            <AdminCandidates />
          </TabsContent>
          
          <TabsContent value="stats">
            <AdminStats />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

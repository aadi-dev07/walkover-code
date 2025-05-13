
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface ProblemDetailProps {
  problemId: string;
}

// Sample problem data
const problems = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    topics: ["Array", "Hash Table"],
    acceptance: "48%",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: "2",
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      }
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    topics: ["Linked List", "Math", "Recursion"],
    acceptance: "39%",
    timeComplexity: "O(max(n,m))",
    spaceComplexity: "O(max(n,m))"
  }
];

export function ProblemDetail({ problemId }: ProblemDetailProps) {
  const [problem, setProblem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching problem data
    setLoading(true);
    setTimeout(() => {
      const foundProblem = problems.find(p => p.id === problemId);
      
      if (foundProblem) {
        setProblem(foundProblem);
      } else {
        toast({
          title: "Problem not found",
          description: "The requested problem could not be found.",
          variant: "destructive",
        });
      }
      
      setLoading(false);
    }, 500);
  }, [problemId, toast]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading problem...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!problem) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Problem not found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The requested problem could not be found. Please check the problem ID and try again.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-auto h-[calc(100vh-12rem)]">
      <CardHeader className="sticky top-0 bg-card z-10 border-b">
        <div className="mb-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/problems">Problems</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{problem.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CardTitle className="text-2xl flex items-center gap-2">
          {problem.title}
          <Badge variant={problem.difficulty === "Easy" ? "default" : problem.difficulty === "Medium" ? "secondary" : "destructive"}>
            {problem.difficulty}
          </Badge>
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          {problem.topics.map((topic: string) => (
            <Badge key={topic} variant="outline">{topic}</Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="description" className="p-6">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="constraints">Constraints</TabsTrigger>
          <TabsTrigger value="hints">Hints</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="space-y-4 mt-4">
          <p>{problem.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border rounded p-3">
              <p className="text-sm font-medium mb-1">Acceptance</p>
              <p>{problem.acceptance}</p>
            </div>
            <div className="border rounded p-3">
              <p className="text-sm font-medium mb-1">Difficulty</p>
              <p>{problem.difficulty}</p>
            </div>
            <div className="border rounded p-3">
              <p className="text-sm font-medium mb-1">Time Complexity</p>
              <p>{problem.timeComplexity}</p>
            </div>
            <div className="border rounded p-3">
              <p className="text-sm font-medium mb-1">Space Complexity</p>
              <p>{problem.spaceComplexity}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="examples" className="space-y-4 mt-4">
          {problem.examples.map((example: any, index: number) => (
            <div key={index} className="space-y-2 border rounded-md p-4">
              <div>
                <h4 className="font-medium">Example {index + 1}:</h4>
                <div className="mt-2 space-y-2">
                  <div className="bg-secondary/50 p-2 rounded">
                    <p className="text-sm font-medium">Input:</p>
                    <pre className="text-sm">{example.input}</pre>
                  </div>
                  <div className="bg-secondary/50 p-2 rounded">
                    <p className="text-sm font-medium">Output:</p>
                    <pre className="text-sm">{example.output}</pre>
                  </div>
                  {example.explanation && (
                    <div>
                      <p className="text-sm font-medium">Explanation:</p>
                      <p className="text-sm">{example.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="constraints" className="mt-4">
          <ul className="list-disc pl-5 space-y-1">
            {problem.constraints.map((constraint: string, index: number) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="hints" className="mt-4">
          <div className="p-4 border rounded-md">
            <p className="font-medium">Need a hint?</p>
            <p className="text-muted-foreground mt-1">
              Click the button below to reveal a hint, but note that this will reduce your score for this problem.
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              onClick={() => {
                toast({
                  title: "Hint revealed",
                  description: "Your score for this problem will be reduced by 10%.",
                });
              }}
            >
              Reveal Hint
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

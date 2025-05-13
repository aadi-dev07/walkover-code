
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Play, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock problem data
const problem = {
  id: 1,
  title: "Two Sum",
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
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
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
    }
  ],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists."
  ],
  difficulty: "Easy",
  timeLimit: 45
};

// Mock code templates for different languages
const codeTemplates = {
  cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        
    }
};`,
  java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
  python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Write your code here
        
`
};

export function CodeEditor() {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(codeTemplates[language as keyof typeof codeTemplates]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(problem.timeLimit * 60);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    setCode(codeTemplates[value as keyof typeof codeTemplates]);
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      const mockOutput = "Output: [0, 1]\nExecution time: 4ms\nMemory used: 8.2MB";
      setOutput(mockOutput);
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setOutput("Submitting solution...");
    
    // Simulate submission and evaluation
    setTimeout(() => {
      setIsRunning(false);
      const mockResult = "All test cases passed!\n\nTest Case 1: ✓\nTest Case 2: ✓\nTest Case 3: ✓\n\nTime Complexity: O(n)\nSpace Complexity: O(n)\n\nExecution Time: 8ms (faster than 93% of submissions)\nMemory Usage: 10.2MB (better than 87% of submissions)";
      setOutput(mockResult);
    }, 2000);
  };

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">{problem.id}. {problem.title}</h1>
          <div className="flex items-center mt-1">
            <Badge className={`mr-2 ${
              problem.difficulty === "Easy"
                ? "bg-green-100 text-green-800"
                : problem.difficulty === "Medium"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}>
              {problem.difficulty}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Timer className="h-4 w-4 mr-1" />
              {formatTime(remainingTime)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="python">Python</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="min-h-[600px]">
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full border rounded-l-lg overflow-hidden flex flex-col">
            <Tabs defaultValue="description" className="flex-1 flex flex-col">
              <div className="bg-muted p-2">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="description" className="flex-1 overflow-auto p-4 mt-0">
                <div className="space-y-4">
                  <div>
                    <p className="whitespace-pre-line">{problem.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Examples:</h3>
                    <div className="space-y-4 mt-2">
                      {problem.examples.map((example, idx) => (
                        <div key={idx} className="bg-secondary p-3 rounded-md">
                          <p className="font-mono text-sm"><strong>Input:</strong> {example.input}</p>
                          <p className="font-mono text-sm"><strong>Output:</strong> {example.output}</p>
                          {example.explanation && (
                            <p className="font-mono text-sm"><strong>Explanation:</strong> {example.explanation}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Constraints:</h3>
                    <ul className="list-disc pl-5 mt-2">
                      {problem.constraints.map((constraint, idx) => (
                        <li key={idx} className="font-mono text-sm">{constraint}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="solution" className="flex-1 overflow-auto p-4 mt-0">
                <div className="bg-secondary p-4 rounded-md">
                  <p className="text-muted-foreground text-center">
                    Solutions will be available after you submit your code
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="submissions" className="flex-1 overflow-auto p-4 mt-0">
                <div className="bg-secondary p-4 rounded-md">
                  <p className="text-muted-foreground text-center">
                    You haven't made any submissions yet
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full border rounded-r-lg overflow-hidden flex flex-col">
            <div className="h-2/3 border-b relative">
              <div className="absolute inset-0 font-mono p-4 bg-[#1e1e1e] text-white overflow-auto">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-full w-full resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-sm"
                  style={{ color: '#d4d4d4', lineHeight: '1.5', tabSize: 2 }}
                />
              </div>
            </div>
            <div className="h-1/3 flex flex-col">
              <div className="bg-muted p-2 flex justify-between items-center">
                <Tabs defaultValue="input" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="input">Input</TabsTrigger>
                    <TabsTrigger value="output">Output</TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleRun} disabled={isRunning}>
                    <Play className="h-4 w-4 mr-1" /> Run
                  </Button>
                  <Button size="sm" onClick={handleSubmit} disabled={isRunning}>
                    Submit
                  </Button>
                </div>
              </div>
              <Tabs defaultValue="input" className="flex-1">
                <TabsContent value="input" className="mt-0 h-full">
                  <Textarea 
                    placeholder="Custom input..."
                    className="h-full resize-none rounded-none border-0 font-mono"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </TabsContent>
                <TabsContent value="output" className="mt-0 h-full">
                  <div className="h-full font-mono bg-secondary/30 p-3 overflow-auto whitespace-pre">
                    {output}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

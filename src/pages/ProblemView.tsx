
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CodeEditor } from "@/components/coding/CodeEditor";
import { ProblemDetail } from "@/components/problems/ProblemDetail";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProblemView = () => {
  const { id } = useParams<{ id: string }>();
  const [isProblemHidden, setIsProblemHidden] = useState(false);
  
  const toggleProblemVisibility = () => {
    setIsProblemHidden(!isProblemHidden);
  };
  
  return (
    <div className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative transition-all duration-300">
        {!isProblemHidden && (
          <div className="transition-all duration-300">
            <ProblemDetail problemId={id || ""} />
          </div>
        )}
        
        <div className={`transition-all duration-300 ${isProblemHidden ? "lg:col-span-2" : ""}`}>
          <div className="flex justify-end mb-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={toggleProblemVisibility}
            >
              {isProblemHidden ? (
                <>
                  <ChevronLeft className="h-4 w-4" /> 
                  Show Problem
                </>
              ) : (
                <>
                  Hide Problem 
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default ProblemView;

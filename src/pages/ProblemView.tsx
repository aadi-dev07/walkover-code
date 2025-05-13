
import { useParams } from "react-router-dom";
import { CodeEditor } from "@/components/coding/CodeEditor";
import { ProblemDetail } from "@/components/problems/ProblemDetail";

const ProblemView = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProblemDetail problemId={id || ""} />
        <CodeEditor />
      </div>
    </div>
  );
};

export default ProblemView;


import { CheckCircle, Code, Timer, Trophy, Users } from "lucide-react";

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Excel
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform provides all the tools necessary for candidates to showcase their coding skills
              and for recruiters to evaluate them effectively.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 pt-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Code className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Interactive Coding Environment</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Advanced Monaco-based editor supporting multiple programming languages.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <CheckCircle className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Real-time Evaluation</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Get instant feedback on your code with test case validation and performance metrics.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Timer className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Timed Challenges</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Test your problem-solving skills under time constraints with our curated problems.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Trophy className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Performance Scoring</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Comprehensive scoring based on accuracy, efficiency, and code quality.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Admin Dashboard</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Powerful tools for recruiters to create tests, analyze results, and manage candidates.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Detailed Reports</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Export comprehensive performance reports for easy evaluation and comparison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

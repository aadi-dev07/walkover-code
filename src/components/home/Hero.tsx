
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Master DSA with Walkover
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Showcase your problem-solving skills and stand out in Walkover's hiring process.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild>
                <Link to="/problems">Start Coding</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 flex items-center justify-center">
            <div className="relative overflow-hidden rounded-xl border bg-background p-2">
              <div className="bg-secondary p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm font-medium">main.cpp</div>
                </div>
                <div className="mt-4 h-[240px] w-full overflow-hidden rounded bg-black p-4">
                  <pre className="text-sm text-white">
                    <code>{`#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int currentMax = nums[0];
    int globalMax = nums[0];
    
    for(int i = 1; i < nums.size(); i++) {
        currentMax = max(nums[i], currentMax + nums[i]);
        globalMax = max(globalMax, currentMax);
    }
    
    return globalMax;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << maxSubArray(nums) << endl;
    return 0;
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1ddf4eef-c942-4621-877d-d284750fa5c2.png" 
              alt="Walkover Logo" 
              className="h-8 w-8" 
            />
            <span className="font-bold text-xl">Walkover DSA Arena</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/problems" className="text-sm font-medium hover:text-primary transition-colors">
              Problems
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

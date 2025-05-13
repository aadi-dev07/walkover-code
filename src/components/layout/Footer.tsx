
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-10 bg-secondary/30">
      <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1ddf4eef-c942-4621-877d-d284750fa5c2.png" 
              alt="Walkover Logo" 
              className="h-8 w-8" 
            />
            <span className="font-bold text-xl">Walkover DSA Arena</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md">
            A platform for conducting and evaluating DSA coding rounds for Walkover's hiring process.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/problems" className="text-sm text-muted-foreground hover:text-foreground">
                  Problems
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-primary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-6 pt-6 border-t">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Walkover DSA Arena. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

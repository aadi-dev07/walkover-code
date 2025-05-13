
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

export function Header() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const location = useLocation();

  // On component mount and when location changes, check localStorage for user role
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);
    // In a real app, you would also handle auth system logout
  };

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
            {userRole === "admin" ? (
              <>
                <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <Link to="/problems" className="text-sm font-medium hover:text-primary transition-colors">
                  Problems
                </Link>
              </>
            ) : (
              <>
                <Link to="/problems" className="text-sm font-medium hover:text-primary transition-colors">
                  Problems
                </Link>
                <Link to="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
                  Leaderboard
                </Link>
              </>
            )}
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          
          {userRole ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-10 w-10 rounded-full p-0">
                  <User />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                {userRole === "admin" && (
                  <DropdownMenuItem>
                    <Link to="/admin">Admin Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

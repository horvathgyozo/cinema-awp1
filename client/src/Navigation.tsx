import { Link } from "react-router";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export const Navigation = () => (
  <nav className="border-b z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
    <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Cinema</span>
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Screenings
            </span>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Movies
            </Link>
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              My Bookings
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Welcome, User</span>
            <Button variant="outline">Logout</Button>
            <Button variant="ghost">Login</Button>
            <Button>Register</Button>
            <button className="bg-background rounded-full flex items-center justify-center w-8 h-8 border">
              🌙
            </button>
          </div>
        </div>
      </div>
    </Card>
  </nav>
);

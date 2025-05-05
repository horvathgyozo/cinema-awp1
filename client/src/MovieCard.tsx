import { Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
// import movies from "./dummy-data/movies.json";
import { Link } from "react-router";

// export type Movie = (typeof movies)[number];
export interface Movie {
  id: number;
  title: string;
  description: string;
}
interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Card className="overflow-hidden flex flex-col h-full pt-0 hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[400px] overflow-hidden">
          <img
            // src={movie.image_path}
            alt="Dune: Part Two"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="line-clamp-2 text-xl">
              {movie.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-2">
            {movie.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground mt-auto">
          <div className="flex justify-between items-center w-full">
            <Badge variant="secondary" className="shrink-0">
              {/* {movie.genre} */}
              Sci-fi
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm gap-1">
              <Clock className="h-4 w-4" />
              {/* <span>{movie.duration} min</span> */}
              <span>120 min</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

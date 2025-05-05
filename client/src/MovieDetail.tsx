import { Button } from "./components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./components/ui/table";
import { useParams } from "react-router";
// import moviesData from "./dummy-data/movies.json";
import { useEffect, useState } from "react";
import { Movie } from "./MovieCard";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [page, setPage] = useState(0);
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: "",
    description: "",
  });

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movies/${movieId}`
      );
      setMovie(await response.json());
    };
    getMovie();
  }, [movieId]);

  // const movie = movieId
  //   ? moviesData.find((movie) => movie.id === parseInt(movieId))
  //   : undefined;

  if (!movie) {
    return null;
  }

  // const limit = 3;
  // // Screenings to display
  // const currentScreenings = movie.screenings.slice(
  //   page * limit,
  //   page * limit + limit
  // );
  // console.log(currentScreenings);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-4 text-muted-foreground">
            {/* <span className="text-lg">{movie.release_year}</span> */}
            <span className="text-lg">2000</span>
            {/* <span className="text-lg">{movie.duration} minutes</span> */}
            <span className="text-lg">120 minutes</span>
            {/* <span className="text-lg">{movie.genre}</span> */}
            <span className="text-lg">Sci-fi</span>
            {/* <span className="text-lg">Director: {movie.director}</span> */}
            <span className="text-lg">Director: Győző Horváth</span>
          </div>
          <p className="text-lg mb-8 text-muted-foreground">
            {movie.description}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Screenings</h2>
            <div className="rounded-md border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Book</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* {currentScreenings.map((screening) => (
                    <TableRow key={screening.id}>
                      <TableCell>{screening.start_time}</TableCell>
                      <TableCell>{screening.price} Ft</TableCell>
                      <TableCell>
                        <Button>Book</Button>
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Button
                onClick={() => setPage(page - 1)}
                variant="outline"
                disabled={page <= 0}
              >
                Previous
              </Button>
              <span className="flex items-center px-4 text-muted-foreground">
                {/* Page {page + 1} of {movie.screenings.length / limit} */}
                Page 1 of 10
              </span>
              <Button onClick={() => setPage(page + 1)} variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            // src={`/${movie.image_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

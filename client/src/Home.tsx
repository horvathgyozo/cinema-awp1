import { Movie, MovieCard } from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
// import moviesData from "./dummy-data/movies.json";

export const Home = () => {
  const {
    isPending,
    isError,
    data: movies,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:8000/api/movies");
      const movies = await response.json();
      return movies;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Now Showing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

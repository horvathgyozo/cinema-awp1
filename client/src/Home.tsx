import { useEffect, useState } from "react";
import { Movie, MovieCard } from "./MovieCard";
// import moviesData from "./dummy-data/movies.json";

export const Home = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/movies");
      return await response.json();
    };
    getAll().then((movies) => setMoviesData(movies));
  }, []);

  return (
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Now Showing</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {moviesData.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

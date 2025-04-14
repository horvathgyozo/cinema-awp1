import { Background } from "./Background";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { MovieDetail } from "./MovieDetail";
import { useState } from "react";
import moviesData from "./dummy-data/movies.json";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedMovie = selectedId
    ? moviesData.find((movie) => movie.id === selectedId)
    : null;

  return (
    <div className="bg-background flex flex-col">
      <Background />
      <Navigation />
      <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
        <Home onCardSelect={setSelectedId} />
        {selectedId ? <MovieDetail movie={selectedMovie} /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;

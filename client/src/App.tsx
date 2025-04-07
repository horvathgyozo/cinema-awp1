import { Background } from "./Background";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { MovieDetail } from "./MovieDetail";

function App() {
  return (
    <div className="bg-background flex flex-col">
      <Background />
      <Navigation />
      <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
        <Home />
        <MovieDetail />
      </main>
      <Footer />
    </div>
  );
}

export default App;

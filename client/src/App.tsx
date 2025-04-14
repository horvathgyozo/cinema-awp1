import { Background } from "./Background";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { MovieDetail } from "./MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background flex flex-col">
        <Background />
        <Navigation />
        <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Home } from "./Home";
import { MovieDetail } from "./MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

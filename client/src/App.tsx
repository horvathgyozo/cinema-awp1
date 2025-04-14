import { Home } from "./Home";
import { MovieDetail } from "./MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies/:movieId" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

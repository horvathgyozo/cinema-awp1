import { Home } from "./Home";
import { MovieDetail } from "./MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { ThemeProvider } from "./ThemeContext";
import Login from "./Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="movies/:movieId" element={<MovieDetail />} />
              <Route
                path="/my-bookings"
                element={
                  <ProtectedRoute>
                    <h1>My bookings</h1>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

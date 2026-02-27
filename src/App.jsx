import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Discover from "./pages/Discover";
import WatchlistPage from "./pages/WatchlistPage";
import LoginForm from "./components/LoginForm";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-[#1f2937] text-white">

      {/* Header only when logged in */}
      {isAuthenticated && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Discover /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/watchlist"
          element={
            isAuthenticated ? <WatchlistPage /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            !isAuthenticated ? <LoginForm /> : <Navigate to="/" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
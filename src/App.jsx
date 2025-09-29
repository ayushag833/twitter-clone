import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginState = localStorage.getItem("logged-in");
    if (savedLoginState === "true") setIsLoggedIn(true);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("logged-in", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("logged-in");
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <LoginScreen onLogin={login} />
              )
            }
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomeScreen onLogout={logout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

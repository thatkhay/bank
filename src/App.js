import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFounfPage";
import UserTransactionPage from "./pages/UserTransactionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-in" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/transaction"
          element={
            isAuthenticated ? (
              <UserTransactionPage onLogout={handleLogout} />
            ) : (
              // Redirect to login page if not authenticated
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

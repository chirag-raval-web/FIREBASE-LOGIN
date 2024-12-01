import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthForm from "./components/AuthForm"; // Path to your AuthForm component
import UserProfile from "./components/UserProfile"; // Path to your UserProfile component

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  console.log("Authentication state:", isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <UserProfile /> : <AuthForm />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <UserProfile /> : <AuthForm />}
        />
      </Routes>
    </Router>
  );
};

export default App;

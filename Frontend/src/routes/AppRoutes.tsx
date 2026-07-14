import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Generate from "../pages/Generate";
import Result from "../pages/Result";
import History from "../pages/History";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/generate" element={<Generate />} />

      <Route path="/result" element={<Result />} />

      <Route path="/history" element={<History />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
};

export default AppRoutes;
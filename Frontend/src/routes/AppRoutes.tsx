import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Generate from "../pages/Generate";
import Result from "../pages/Result";
import History from "../pages/History";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
          path="/dashboard"
          element={
              <ProtectedRoute>
                  <Dashboard />
              </ProtectedRoute>
          }
      />
      
      <Route
          path="/generate"
          element={
              <ProtectedRoute>
                  <Generate />
              </ProtectedRoute>
          }
      />
      
      <Route
          path="/result"
          element={
              <ProtectedRoute>
                  <Result />
              </ProtectedRoute>
          }
      />
      
      <Route
          path="/history"
          element={
              <ProtectedRoute>
                  <History />
              </ProtectedRoute>
          }
      />
      
      <Route
          path="/projects"
          element={
              <ProtectedRoute>
                  <Projects />
              </ProtectedRoute>
          }
      />
      
      <Route
          path="/profile"
          element={
              <ProtectedRoute>
                  <Profile />
              </ProtectedRoute>
          }
      />
    </Routes>
  );
};

export default AppRoutes;
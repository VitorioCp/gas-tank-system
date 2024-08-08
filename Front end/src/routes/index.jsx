import {
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Login } from "../pages/Login";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { AppRoutes, AuthenticatedRoutes } from "./app.routes";

export function Routes() {
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useAuth(); // Usando o hook useAuth para verificar a autenticação

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        await axios.get("http://localhost:3333/verify-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao verificar o token:", error.response?.data || error.message);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [setIsAuthenticated]);

  const handleLogin = (newToken) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", newToken);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <RouterRoutes>
      {isAuthenticated ? (
        <Route path="/*" element={<AuthenticatedRoutes />} />
      ) : (
        <>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<AppRoutes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </RouterRoutes>
  );
}



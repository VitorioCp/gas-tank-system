import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro"; // Exemplo de página não autenticada
import { Login } from "../pages/Login"; // Página de login
import { Dashboard } from "../pages/dashboard";

export function AppRoutes({ handleLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

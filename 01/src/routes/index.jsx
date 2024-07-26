import { BrowserRouter } from "react-router-dom";
import { AppRoutes, AuthenticatedRoutes } from "./app.routes";
import { useState, useEffect } from "react";
import axios from "axios";

export function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Inicializa como não autenticado

  const fetchProtectedData = async () => {
    const token = localStorage.getItem("token");

    const tokenValido = await axios.post("localhost:3333/login", localStorage.getItem("token"))



    try {
      const response = await axios.post("http://localhost:3333/login", { // Aponte para a rota que verifica o token
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
        },
        
     
      });
      console.log("Dados protegidos:", response.data);
      setIsAuthenticated(true); // Se a requisição for bem-sucedida, define como autenticado
      console.log(IsAuthenticated);
    } catch (error) {
      console.error("Erro ao buscar dados protegidos:", error.response?.data || error.message);
      setIsAuthenticated(false); // Se falhar, define como não autenticado
    }
  };

  useEffect(() => {
    fetchProtectedData(); // Chama a função ao montar o componente
  }, []); // Executa apenas uma vez na montagem

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <AuthenticatedRoutes /> // Renderiza rotas autenticadas
      ) : (
        <AppRoutes /> // Renderiza rotas não autenticadas
      )}
    </BrowserRouter>
  );
}


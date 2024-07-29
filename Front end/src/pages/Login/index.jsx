import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Login({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3333/login", {
        login,
        password,
      });

      console.log("Login bem-sucedido:", response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        onLogin(response.data.token);
        navigate("/cashstart");
      }
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#E5E7EB", // Cor de fundo
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
            color: "#4B5563", // Cor do texto
          }}
        >
          Gas System
        </h1>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
            color: "#4B5563", // Cor do texto
          }}
        >
          Login
        </h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <label
              htmlFor="login"
              style={{
                display: "block",
                color: "#4B5563",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Login
            </label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Digite seu login"
              onFocus={(e) => (e.target.style.borderColor = "#3B82F6")}
              onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                color: "#4B5563",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Digite sua senha"
              onFocus={(e) => (e.target.style.borderColor = "#3B82F6")}
              onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#3B82F6",
              color: "white",
              fontWeight: "600",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563EB")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3B82F6")}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <Link
            to="/cadastro"
            style={{ color: "#3B82F6", textDecoration: "underline" }}
          >
            Não tem uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

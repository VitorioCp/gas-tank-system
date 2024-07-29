import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Estado para gerenciar erros
  const [success, setSuccess] = useState(false); // Estado para gerenciar sucesso

  const navigate = useNavigate();

  async function handleCadastro(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    try {
      const response = await axios.post("http://localhost:3333/users", {
        login,
        email,
        password,
      });

      console.log("Cadastro realizado com sucesso", response.data);
      setSuccess(true); // Define o estado de sucesso
      setError(null); // Limpa qualquer erro anterior
      navigate("/");
    } catch (error) {
      console.error("Não foi possível enviar os dados", error);
      setError("Não foi possível realizar o cadastro. Tente novamente."); // Define uma mensagem de erro
      setSuccess(false); // Limpa qualquer estado de sucesso anterior
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f7fafc" }}>
      <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#2d3748" }}>Cadastro</h2>
        <form onSubmit={handleCadastro} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {success && (
            <p style={{ color: "#38a169" }}>Cadastro realizado com sucesso!</p>
          )}
          {error && <p style={{ color: "#e53e3e" }}>{error}</p>}
          <div>
            <label htmlFor="login" style={{ display: "block", color: "#4a5568", fontWeight: "500", marginBottom: "0.25rem" }}>Login</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", outline: "none", transition: "border-color 0.2s", boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: "block", color: "#4a5568", fontWeight: "500", marginBottom: "0.25rem" }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", outline: "none", transition: "border-color 0.2s", boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: "block", color: "#4a5568", fontWeight: "500", marginBottom: "0.25rem" }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem", outline: "none", transition: "border-color 0.2s", boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <button
            type="submit"
            style={{ width: "100%", padding: "0.5rem", backgroundColor: "#3182ce", color: "#fff", fontWeight: "600", borderRadius: "0.375rem", border: "none", cursor: "pointer", transition: "background-color 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2b6cb0"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#3182ce"}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

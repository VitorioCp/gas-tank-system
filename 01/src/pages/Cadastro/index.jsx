import axios from "axios";
import { useState } from "react";

export function Cadastro() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCadastro(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    try {
      // Envia os dados como um objeto
      const response = await axios.post("http://localhost:3333/users", {
        login,
        email,
        password,
      });
      console.log("Cadastro realizado com sucesso", response.data);
    } catch (error) {
      console.error("Não foi possível enviar os dados", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label htmlFor="login" className="block text-gray-700 font-medium mb-1">Login</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

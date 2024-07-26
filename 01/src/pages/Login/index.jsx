import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login({ onLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usando useNavigate para redirecionar após o login bem-sucedido

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/login', {
        login,
        password,
      });

      console.log('Login bem-sucedido:', response.data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        onLogin(response.data.token);
        console.log('Login bem-sucedido');

        // Redireciona para a página desejada após o login
        navigate("/cashStart"); // Use o navigate para redirecionar
      }
    } catch (error) {
      console.error(
        'Erro ao fazer login:',
        error.response?.data || error.message
      );
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Login:
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

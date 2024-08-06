import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Title,
  Subtitle,
  InputContainer,
  Label,
  Input,
  SubmitButton,
  LinkContainer,
} from "./style"; // Certifique-se de que o caminho está correto

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
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <Container>
      <Card>
        <Title>Gas System</Title>
        <Subtitle>Login</Subtitle>
        <form onSubmit={handleLogin}>
          <InputContainer>
            <Label htmlFor="login">Login</Label>
            <Input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              placeholder="Digite seu login"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </InputContainer>
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
        <LinkContainer>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </LinkContainer>
      </Card>
    </Container>
  );
}

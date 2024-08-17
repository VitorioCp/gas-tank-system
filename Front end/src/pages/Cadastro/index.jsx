import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormWrapper, Title, Form, SuccessMessage, ErrorMessage, Label, Input, SubmitButton, BackToLoginButton } from "./style";

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
    <Container>
      <FormWrapper>
        <Title>Cadastro</Title>
        <Form onSubmit={handleCadastro}>
          {success && <SuccessMessage>Cadastro realizado com sucesso!</SuccessMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <div>
            <Label htmlFor="login">Login</Label>
            <Input
              type="text"
              id="login"
              name="login"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <SubmitButton type="submit">Cadastrar</SubmitButton>
          <BackToLoginButton onClick={() => navigate("/")}>
            Voltar para Login
          </BackToLoginButton>
        </Form>
      </FormWrapper>
    </Container>
  );
}

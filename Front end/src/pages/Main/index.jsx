import React, { useEffect } from "react";
import {
  Container,
  Section,
  Input,
  Textarea,
  Flex,
  TrocoTroca,
  TrocoTrocaItem,
  Button,
  Header,
  RadioGroup,
  RadioLabel,
  RadioInput,
} from "./styles";
import { useAuth } from "../../context/AuthContext"; // Importando o hook useAuth
import { useNavigate } from "react-router-dom";

export function Main() {
  const { isAuthenticated } = useAuth(); // Usando o hook useAuth para verificar a autenticação
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redireciona para a página de login se não estiver autenticado
    }
  }, [isAuthenticated, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // Força o recarregamento da página
  };

  return (
    <Container>
      <Section>
        <button onClick={logout}>X</button>
        <Header>Gás</Header>
        <Input type="number" placeholder="Adicione uma quantidade" />
        <Textarea placeholder="Observações:" cols="30" rows="10"></Textarea>
        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="dinheiro" />
            Dinheiro
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="pix" />
            Pix
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="debito" />
            Cartão de Débito
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="credito" />
            Cartão de Crédito
          </RadioLabel>
        </RadioGroup>

        <Button>Adicionar</Button>
      </Section>

      <Section>
        <Header>Água</Header>
        <Input type="number" placeholder="Adicione uma quantidade" />
        <Textarea placeholder="Observações:" cols="30" rows="10"></Textarea>
        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="dinheiro" />
            Dinheiro
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="pix" />
            Pix
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" name="payment" value="debito" />
            Cartão
          </RadioLabel>
        </RadioGroup>

        <Button>Adicionar</Button>
      </Section>

      <Section>
        <div>Gás Cheio: 100</div>
        <div>Gás Vazio: 81</div>
        <TrocoTroca>
          <TrocoTrocaItem>Trocas: 0</TrocoTrocaItem>
          <TrocoTrocaItem>Troco R$ 1700</TrocoTrocaItem>
        </TrocoTroca>
      </Section>

      <Section>
        <div>Água Cheia: 75</div>
        <div>Água Vazia: 2</div>
      </Section>

      <Flex>
        <div>
          <h1>Anotações</h1>
        </div>
        <div></div>
      </Flex>
    </Container>
  );
}

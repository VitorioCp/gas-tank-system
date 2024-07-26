import React from "react";
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
  RadioInput
} from "./styles";

export function Main() {
  return (
    <Container>
      <Section>
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
        <div>
          
        </div>
      </Flex>
    </Container>
  );
}

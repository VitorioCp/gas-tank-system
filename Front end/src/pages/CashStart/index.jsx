import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./style";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Importando o hook useAuth
import axios from "axios";

export function CashStart() {
  const { isAuthenticated } = useAuth(); // Usando o hook useAuth para verificar a autenticação
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [troco, setTroco] = useState("");
  const [troca, setTroca] = useState("");
  const [gasTotal, setGasTotal] = useState("");
  const [gasCheio, setGasCheio] = useState("");
  const [gasVazio, setGasVazio] = useState("");
  const [aguaTotal, setAguaTotal] = useState("");
  const [aguaCheia, setAguaCheia] = useState("");
  const [aguaVazia, setAguaVazia] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redireciona para a página de login se não estiver autenticado
    }
  }, [isAuthenticated, navigate]);

  async function handleCaixa(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    if (
      !troco ||
      !data ||
      !troca ||
      !gasTotal ||
      !gasCheio ||
      !gasVazio ||
      !aguaTotal ||
      !aguaCheia ||
      !aguaVazia
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no localStorage

    try {
      await axios.post("http://localhost:3333/form", {
        data,
        troco,
        troca,
        gasTotal,
        gasCheio,
        gasVazio,
        aguaTotal,
        aguaCheia,
        aguaVazia,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Incluindo o token no cabeçalho
        }
      });
      console.log("Caixa aberta com sucesso!");
      navigate("/caixa");
    } catch (error) {
      console.error("Não foi possível enviar os dados", error);
      alert("Erro ao enviar os dados. Tente novamente."); // Feedback ao usuário
    }
  }

  return (
    <Container>
      <h1>Abertura de Caixa</h1>
      <Form onSubmit={handleCaixa}> {/* Adicione onSubmit ao Form */}
        <input
          type="date"
          placeholder="Data"
          onChange={(e) => setData(e.target.value)}
          required
        />
        <div className="top-row">
          <div className="top-left">
            <label htmlFor="troco">Troco</label>
            <input
              id="troco"
              type="text"
              placeholder="Digite o troco inicial"
              required
              onChange={(e) => setTroco(e.target.value)}
            />
          </div>
          <div className="top-right">
            <label htmlFor="troca">Troca</label>
            <input
              id="troca"
              type="text"
              placeholder="Digite a troca"
              required
              onChange={(e) => setTroca(e.target.value)}
            />
          </div>
        </div>
        <div className="gas">
          <label htmlFor="gasTotal">Gás Total</label>
          <input
            id="gasTotal"
            type="text"
            placeholder="Digite o total de gás"
            required
            onChange={(e) => setGasTotal(e.target.value)}
          />
          <label htmlFor="gasCheio">Gás Cheio</label>
          <input
            id="gasCheio"
            type="text"
            placeholder="Digite a quantidade de gás cheio"
            required
            onChange={(e) => setGasCheio(e.target.value)}
          />
          <label htmlFor="gasVazio">Gás Vazio</label>
          <input
            id="gasVazio"
            type="text"
            placeholder="Digite a quantidade de gás vazio"
            required
            onChange={(e) => setGasVazio(e.target.value)}
          />
        </div>
        <div className="agua">
          <label htmlFor="aguaTotal">Água Total</label>
          <input
            id="aguaTotal"
            type="text"
            placeholder="Digite o total de água"
            required
            onChange={(e) => setAguaTotal(e.target.value)}
          />
          <label htmlFor="aguaCheia">Água Cheia</label>
          <input
            id="aguaCheia"
            type="text"
            placeholder="Digite a quantidade de água cheia"
            required
            onChange={(e) => setAguaCheia(e.target.value)}
          />
          <label htmlFor="aguaVazia">Água Vazia</label>
          <input
            id="aguaVazia"
            type="text"
            placeholder="Digite a quantidade de água vazia"
            required
            onChange={(e) => setAguaVazia(e.target.value)}
          />
        </div>
        <button type="submit">
          Abrir Caixa
        </button>
      </Form>
    </Container>
  );
}

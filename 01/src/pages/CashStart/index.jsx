import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Main } from "../Main";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function CashStart() {
  const [data, setData] = useState()
  const [troco, setTroco] = useState();
  const [troca, setTroca] = useState();
  const [gasTotal, setGasTotal] = useState();
  const [gasCheio, setGasCheio] = useState();
  const [gasVazio, setGasVazio] = useState();
  const [aguaTotal, setAguaTotal] = useState();
  const [aguaCheia, setAguaCheia] = useState();
  const [aguaVazia, setAguaVazia] = useState();

  
  async function handleCaixa(){
    if(!troco|| !data || !troca || !gasTotal|| !gasCheio || !gasVazio || !aguaTotal|| !aguaCheia|| !aguaVazia) {
      alert("Preencha todos os campos")
      return;
    }
    await api.post("/form", { data ,troco, troca , gasTotal, gasCheio, gasVazio, aguaTotal, aguaCheia, aguaVazia}).then(() => {
      alert("Caixa aberto com sucesso!")
    }).catch((error) => {
      console.log(error)
    })
  }




  return (
    <Container>
      <h1>Abertura de Caixa</h1>
      <Form>
        <input type="date" placeholder="Data" onChange={e => setData(e.target.value)} />
        <div className="top-row">
          <div className="top-left">


            <label htmlFor="troco">Troco</label>
            <input
              id="troco"
              type="text"
              placeholder="Digite o troco inicial"
              required
              onChange={e => setTroco(e.target.value)}
            />
          </div>
          <div className="top-right">
            <label htmlFor="troca">Troca</label>
            <input
              id="troca"
              type="text"
              placeholder="Digite a troca"
              required
              onChange={e => setTroca(e.target.value)}
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
            onChange={e => setGasTotal(e.target.value)}
          />
          <label htmlFor="gasCheio">Gás Cheio</label>
          <input
            id="gasCheio"
            type="text"
            placeholder="Digite a quantidade de gás cheio"
            required
            onChange={e => setGasCheio(e.target.value)}
          />
          <label htmlFor="gasVazio">Gás Vazio</label>
          <input
            id="gasVazio"
            type="text"
            placeholder="Digite a quantidade de gás vazio"
            required
            onChange={e => setGasVazio(e.target.value)}
          />
        </div>
        <div className="agua">
          <label htmlFor="aguaTotal">Água Total</label>
          <input
            id="aguaTotal"
            type="text"
            placeholder="Digite o total de água"
            required
            onChange={e => setAguaTotal(e.target.value)}
          />
          <label htmlFor="aguaCheia">Água Cheia</label>
          <input
            id="aguaCheia"
            type="text"
            placeholder="Digite a quantidade de água cheia"
            required
            onChange={e => setAguaCheia(e.target.value)}
          />
          <label htmlFor="aguaVazia">Água Vazia</label>
          <input
            id="aguaVazia"
            type="text"
            placeholder="Digite a quantidade de água vazia"
            required
            onChange={e => setAguaVazia(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleCaixa}>
          <Link to="/main">Abrir Caixa</Link>{" "}
        </button>
      </Form>
    </Container>
  );
}

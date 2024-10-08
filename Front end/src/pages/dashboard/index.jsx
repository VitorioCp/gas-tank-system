import React, { useState, useEffect } from "react"; // Importar useEffect
import {
  Container,
  Board,
  Balance,
  SalesSection,
  SalesInfo,
  SalesTitle,
  SalesNumber,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalForm,
  ModalField,
  ModalLabel,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  ModalButton,
  CloseButton,
  ChartContainer,
  ChartLabel,
  ChartNumber,
  SectionButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TotalGas } from "../../components/TotalGas"; // Importar a função TotaGas
import { TotalAgua } from "../../components/TotalAgua";
import {
  EstoqueAguaCheio,
  EstoqueAguaVazio,
  EstoqueGasCheio,
  EstoqueGasVazio,
} from "../../components/Estoque/index";
import {
  GasDinheiro,
  GasDebito,
  GasPix,
  GalaoCredito,
  GalaoDebito,
  GalaoDinheiro,
  GalaoPix,
  GasCredito,
} from "../../components/Vendas";
import { SaldoTotal } from "../../components/SaldoTotal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BoardNotas } from "../../components/BoardNotas";

// Configuração do Axios para incluir token
const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEstoqueModalOpen, setIsEstoqueModalOpen] = useState(false);
  const [isSaldoModalOpen, setIsSaldoModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [observation, setObservation] = useState("");

  const [totalGas, setTotalGas] = useState(0); // Estado para armazenar o total de gás
  const [totalAgua, setTotalAgua] = useState(0);
  const [loading, setLoading] = useState(true); // Estado para controle de loading
  const [venda, setVenda] = useState("gas");
  const [estoqueAguaCheio, setEstoqueAguaCheio] = useState(0);
  const [estoqueAguaVazio, setEstoqueAguaVazio] = useState(0);
  const [estoqueGasCheio, setEstoqueGasCheio] = useState(0);
  const [estoqueGasVazio, setEstoqueGasVazio] = useState(0);
  const [gasSalesData, setGasSalesData] = useState([]);
  const [waterSalesData, setWaterSalesData] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [vendaStock, setVendaStock] = useState("");
  const [quantityStock, setQuantityStock] = useState(0);
  const [saldoValue, setSaldoValue] = useState(0);
  const [observacaoSaldo, setObservacaoSaldo] = useState("");
  const [observacaoEstoque, setObservacaoEstoque] = useState("");

  const navigate = useNavigate();

  const fetchTotalGas = async () => {
    try {
      const [totalGasValue, gasDinheiro, gasDebito, gasCredito, gasPix] =
        await Promise.all([
          TotalGas(),
          GasDinheiro(),
          GasDebito(),
          GasCredito(),
          GasPix(),
        ]);
      setTotalGas(totalGasValue);
      setGasSalesData([
        { method: "Dinheiro", value: gasDinheiro, color: "#000" },
        { method: "Débito", value: gasDebito, color: "#000" },
        { method: "Crédito", value: gasCredito, color: "#000" },
        { method: "Pix", value: gasPix, color: "#000" },
      ]);
    } catch (error) {
      console.error("Erro ao recuperar o total de gás:", error);
    } finally {
      setLoading(false);
    }
  };

  const fechtTotalAgua = async () => {
    try {
      const [
        totalAguaValue,
        galaoDinheiro,
        galaoDebito,
        galaoCredito,
        galaoPix,
      ] = await Promise.all([
        TotalAgua(),
        GalaoDinheiro(),
        GalaoDebito(),
        GalaoCredito(),
        GalaoPix(),
      ]);
      setTotalAgua(totalAguaValue);
      setWaterSalesData([
        { method: "Dinheiro", value: galaoDinheiro, color: "#000" },
        { method: "Débito", value: galaoDebito, color: "#000" },
        { method: "Crédito", value: galaoCredito, color: "#000" },
        { method: "Pix", value: galaoPix, color: "#000" },
      ]);
    } catch (error) {
      console.error("Erro ao recueprar o total de águas:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEstoque = async () => {
    if (isEstoqueModalOpen) {
      try {
        const response2 = await api.post("/notas", {
          observacoes: `Alteração no estoque de ${vendaStock} quantidade ${quantityStock}, motivo -> ${observacaoEstoque}`,
        });
        console.log("Dados enviados com sucesso:", response2.data);
      } catch (error) {
        console.error("Erro ao tentar enviar dados para o servidor:", error);
      }
    }

    try {
      const [aguaCheio, aguaVazio, gasCheio, gasVazio] = await Promise.all([
        EstoqueAguaCheio(),
        EstoqueAguaVazio(),
        EstoqueGasCheio(),
        EstoqueGasVazio(),
      ]);
      setEstoqueAguaCheio(aguaCheio);
      setEstoqueAguaVazio(aguaVazio);
      setEstoqueGasCheio(gasCheio);
      setEstoqueGasVazio(gasVazio);
    } catch (error) {
      console.error("Erro ao recuperar o estoque:", error);
    }
  };

  useEffect(() => {
    setSaldoTotal(totalGas + totalAgua);
  }, [totalGas, totalAgua]);

  useEffect(() => {
    fetchTotalGas();
    fechtTotalAgua();
    fetchEstoque();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenEstoqueModal = () => {
    setIsEstoqueModalOpen(true);
  };

  const handleCloseEstoqueModal = () => {
    setIsEstoqueModalOpen(false);
  };

  const handleOpenSaldoModal = () => {
    setIsSaldoModalOpen(true);
  };

  const handleCloseSaldoModal = () => {
    setIsSaldoModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response2 = await api.post("/notas", {
        observacoes: `Venda de ${quantity} ${venda} no ${paymentMethod}, ${observation} `,
      });
      console.log("Enviado com sucesso", response2);
    } catch (error) {
      console.error("Não foi possível enviar para o servidor", error);
    }

    try {
      const response = await api.post("/sell", {
        venda,
        paymentMethod,
        quantity,
        observation,
      });
      console.log("Enviado com sucesso", response);

      // Recarregar o total de gás, água e estoque após uma nova venda
      await Promise.all([fetchTotalGas(), fechtTotalAgua(), fetchEstoque()]);
    } catch (error) {
      console.error("Não foi possível enviar para o servidor", error);
    }
    setIsModalOpen(false);
  };

  const handleModalStockSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/stock", {
        produto: vendaStock,
        quantity: quantityStock,
      });

      console.log("enviado com sucesso", response);
      await fetchEstoque();
    } catch (error) {
      console.log("Não foi possível enviar o estoque para o servidor", error);
    }

    setIsEstoqueModalOpen(false);
  };

  const handleModalSaldo = async (event) => {
    event.preventDefault();
    try {
      const response2 = await api.post("/notas", {
        observacoes: `Alteração no caixa de: R$ ${saldoValue}, causa => ${observacaoSaldo}`,
      });
    } catch (error) {
      console.error("Erro ao enviar os dados para o servidor", error);
    }

    try {
      const response = await api.post("/saldo", {
        valores: saldoValue,
        observacao: observacaoSaldo,
      });
      console.log("Enviado com sucesso", response);

      // Atualize o saldo total após adicionar
      setSaldoTotal((prevSaldo) => prevSaldo + parseFloat(saldoValue)); // Atualiza o saldo total
    } catch (error) {
      console.error("Erro ao enviar os dados para o servidor", error);
    }
    setIsSaldoModalOpen(false);
  };

  const handleSubmitEstoque = async (event) => {
    event.preventDefault();

    setIsEstoqueModalOpen(false);
  };

  return (
    <Container>
      <Header />
      <Board>
        <Balance>
          <SaldoTotal saldoTotal={saldoTotal} />{" "}
        </Balance>
        <SalesSection>
          <SalesInfo>
            <SalesTitle>Valor físico Arrecadado Gás</SalesTitle>
            <SalesNumber>
              {loading ? "Carregando..." : ` R$ ${totalGas}`}
            </SalesNumber>{" "}
            {/* Exibe o total de gás */}
            <ChartContainer className="chart">
              {gasSalesData.map((data, index) => (
                <div key={index}>
                  <ChartLabel>{data.method}:</ChartLabel>
                  <ChartNumber color={data.color}>{data.value}</ChartNumber>
                </div>
              ))}
            </ChartContainer>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Valor físico Arrecadado Galão</SalesTitle>
            <SalesNumber>
              {loading ? "Carregando..." : ` R$ ${totalAgua}`}
            </SalesNumber>{" "}
            <ChartContainer className="chart">
              {waterSalesData.map((data, index) => (
                <div key={index}>
                  <ChartLabel>{data.method}:</ChartLabel>
                  <ChartNumber color={data.color}>{data.value}</ChartNumber>
                </div>
              ))}
            </ChartContainer>
          </SalesInfo>
        </SalesSection>
        <SalesSection>
          <SalesInfo>
            <SalesTitle>Total de Gás Cheio</SalesTitle>
            <SalesNumber>{estoqueGasCheio}</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Gás Vazio</SalesTitle>
            <SalesNumber>{estoqueGasVazio}</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Água Cheia</SalesTitle>
            <SalesNumber>{estoqueAguaCheio}</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Água Vazia</SalesTitle>
            <SalesNumber>{estoqueAguaVazio}</SalesNumber>
          </SalesInfo>
        </SalesSection>
        <SectionButton>
          <Button onClick={handleOpenModal}>Adicionar Venda</Button>
          <Button onClick={handleOpenEstoqueModal}>Adicionar Estoque</Button>
          <Button onClick={handleOpenSaldoModal}>Adicionar Saldo</Button>
        </SectionButton>
        <BoardNotas />
      </Board>

      {/* Modal para adicionar venda */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Adicionar Venda</ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
              <ModalField>
                <ModalLabel htmlFor="">Venda:</ModalLabel>

                <ModalSelect
                  id="venda"
                  onChange={(e) => {
                    setVenda(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="gas">Gás</option>
                  <option value="agua">Galão</option>
                </ModalSelect>
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="quantity">Quantidade</ModalLabel>
                <ModalInput
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="paymentMethod">
                  Forma de Pagamento
                </ModalLabel>
                <ModalSelect
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Debito">Débito</option>
                  <option value="Credito">Crédito</option>
                  <option value="Pix">Pix</option>
                </ModalSelect>
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="observation">Observação</ModalLabel>
                <ModalTextArea
                  id="observation"
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  rows="4"
                />
              </ModalField>
              <ModalButton type="submit">Adicionar</ModalButton>
              <CloseButton type="button" onClick={handleCloseModal}>
                Cancelar
              </CloseButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal para adicionar Estoque */}

      {isEstoqueModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Adicionar Estoque</ModalHeader>
            <ModalForm onSubmit={handleSubmitEstoque}>
              {/* Campos específicos para adicionar estoque */}

              <ModalField>
                <ModalSelect
                  id="vendaestoque"
                  onChange={(e) => {
                    setVendaStock(e.target.value);
                  }}
                >
                  <option value="">Selecione</option>
                  <option value="gas">Gás</option>
                  <option value="agua">Galão</option>
                </ModalSelect>
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="estoqueQuantity">Quantidade</ModalLabel>
                <ModalInput
                  type="number"
                  id="estoqueQuantity"
                  value={quantityStock} // Adicione um estado específico para quantidade de estoque se necessário
                  onChange={(e) => setQuantityStock(e.target.value)}
                  required
                />
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="saldoObs">Observação: </ModalLabel>
                <ModalInput
                  type="text"
                  id="EstoqueObs"
                  onChange={(e) => setObservacaoEstoque(e.target.value)}
                />
              </ModalField>
              <ModalButton type="submit" onClick={handleModalStockSubmit}>
                Adicionar
              </ModalButton>
              <CloseButton type="button" onClick={handleCloseEstoqueModal}>
                Cancelar
              </CloseButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal para adicionar Saldo */}

      {isSaldoModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Adicionar Saldo</ModalHeader>
            <ModalForm>
              <ModalField>
                <ModalLabel htmlFor="adicaoSaldo">Valor: R$ </ModalLabel>
                <ModalInput
                  type="number"
                  id="adicaoSaldo"
                  onChange={(e) => setSaldoValue(e.target.value)}
                />
              </ModalField>
              <ModalField>
                <ModalLabel htmlFor="saldoObs">Observação: </ModalLabel>
                <ModalInput
                  type="text"
                  id="saldoObs"
                  onChange={(e) => setObservacaoSaldo(e.target.value)}
                />
              </ModalField>

              <ModalButton type="submit" onClick={handleModalSaldo}>
                Adicionar
              </ModalButton>
              <CloseButton type="button" onClick={handleCloseSaldoModal}>
                Cancelar
              </CloseButton>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
    </Container>
  );
};

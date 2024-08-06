import React, { useState, useEffect } from "react"; // Importar useEffect
import { FaSignOutAlt } from "react-icons/fa";
import {
  Container,
  Header,
  LogoutButton,
  Board,
  Balance,
  SalesSection,
  SalesInfo,
  SalesTitle,
  SalesNumber,
  Button,
  Footer,
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
  NotesSection,
  Note,
  EditButton,
  DeleteButton,
  SectionButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Flex } from "../Main/styles";
import axios from "axios";
import { TotaGas } from "../../components/TotaGas"; // Importar a função TotaGas
import { TotaAgua } from "../../components/TotalAgua";
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
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [observation, setObservation] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
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
  const navigate = useNavigate();

  const fetchTotalGas = async () => {
    try {
      const [totalGasValue, gasDinheiro, gasDebito, gasCredito, gasPix] =
        await Promise.all([
          TotaGas(),
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
        TotaAgua(),
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

  const handleSubmit = async (event) => {
    event.preventDefault();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const handleAddNote = () => {
    if (newNote) {
      if (editingNoteIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex] = newNote;
        setNotes(updatedNotes);
        setEditingNoteIndex(null);
      } else {
        setNotes([...notes, newNote]);
      }
      setNewNote("");
    }
  };

  const handleEditNote = (index) => {
    setNewNote(notes[index]);
    setEditingNoteIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <Container>
      <Header>
        Dashboard de Depósito de Gás
        <Flex style={{ gap: "50px" }}>
          <LogoutButton onClick={handleLogout} style={{ marginRight: "30px" }}>
            <FaSignOutAlt />
            Logout
          </LogoutButton>
        </Flex>
      </Header>
      <Board>
        <h2 style={{ textAlign: "center" }}>{currentDate}</h2>
        <Balance>Saldo total: R$ 1.500</Balance>
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
          <Button onClick={handleOpenModal}>Adicionar Estoque</Button>
          <Button onClick={handleOpenModal}>Adicionar Saldo </Button>
        </SectionButton>

        <NotesSection>
          <h2>Observações Importantes</h2>
          <ModalField>
            <ModalInput
              type="text"
              placeholder="Adicionar nova observação..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <ModalButton type="button" onClick={handleAddNote}>
              {editingNoteIndex !== null ? "Atualizar" : "Adicionar"}
            </ModalButton>
          </ModalField>
          {notes.length === 0 ? (
            <p>Nenhuma observação adicionada.</p>
          ) : (
            notes.map((note, index) => (
              <Note key={index}>
                {note}
                <EditButton onClick={() => handleEditNote(index)}>
                  Editar
                </EditButton>
                <DeleteButton onClick={() => handleDeleteNote(index)}>
                  Deletar
                </DeleteButton>
              </Note>
            ))
          )}
        </NotesSection>
      </Board>
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
      <Footer>&copy; 2024 Depósito de Gás</Footer>
    </Container>
  );
};

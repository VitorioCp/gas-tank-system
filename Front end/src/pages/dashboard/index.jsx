import React, { useState } from "react";
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
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [observation, setObservation] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingNoteIndex, setEditingNoteIndex] = useState(null); // Índice da nota sendo editada
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Venda adicionada:", {
      quantity,
      paymentMethod,
      observation,
    });
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
        // Se estamos editando uma nota, atualiza a nota existente
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex] = newNote;
        setNotes(updatedNotes);
        setEditingNoteIndex(null);
      } else {
        // Caso contrário, adiciona uma nova nota
        setNotes([...notes, newNote]);
      }
      setNewNote("");
    }
  };

  const handleEditNote = (index) => {
    setNewNote(notes[index]);
    setEditingNoteIndex(index); // Define o índice da nota a ser editada
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const gasSalesData = [
    { method: "Dinheiro", value: 30, color: "#007bff" },
    { method: "Débito", value: 20, color: "#28a745" },
    { method: "Crédito", value: 10, color: "#ffc107" },
    { method: "Pix", value: 40, color: "#17a2b8" },
  ];

  const waterSalesData = [
    { method: "Dinheiro", value: 15, color: "#007bff" },
    { method: "Débito", value: 25, color: "#28a745" },
    { method: "Crédito", value: 35, color: "#ffc107" },
    { method: "Pix", value: 25, color: "#17a2b8" },
  ];

  return (
    <Container>
      <Header>
        Dashboard de Depósito de Gás
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </LogoutButton>
      </Header>
      <Board>
        <Balance>Saldo total: R$ 1.500</Balance>
        <SalesSection>
          <SalesInfo>
            <SalesTitle>Total de Gás Vendido</SalesTitle>
            <SalesNumber>100</SalesNumber>
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
            <SalesTitle>Total de Galões de Água Vendidos</SalesTitle>
            <SalesNumber>50</SalesNumber>
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
            <SalesNumber>150</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Água Cheia</SalesTitle>
            <SalesNumber>80</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Gás Vazio</SalesTitle>
            <SalesNumber>20</SalesNumber>
          </SalesInfo>
          <SalesInfo>
            <SalesTitle>Total de Água Vazia</SalesTitle>
            <SalesNumber>10</SalesNumber>
          </SalesInfo>
        </SalesSection>
        <Button onClick={handleOpenModal}>Adicionar Venda</Button>

        {/* Nova Seção de Observações Importantes */}
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
                <EditButton onClick={() => handleEditNote(index)}>Editar</EditButton>
                <DeleteButton onClick={() => handleDeleteNote(index)}>Deletar</DeleteButton>
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

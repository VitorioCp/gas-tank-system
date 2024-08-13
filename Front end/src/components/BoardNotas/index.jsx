import { useEffect, useState } from "react";
import {
  ModalButton,
  ModalField,
  ModalForm,
  ModalInput,
  ModalLabel,
} from "../../pages/dashboard/styles";
import axios from "axios";
import "./style.css";
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

export const BoardNotas = () => {
  const [obs, setObs] = useState("");
  const [observacoes, setObservacoes] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmitNotas = async (event) => {
    event.preventDefault();

    if (!obs.trim()) {
      alert("O campo de observação não pode estar vazio.");
      return;
    }

    try {
      if (editId) {
        // Se um ID de edição for definido, estamos atualizando uma observação existente
        const response = await api.put(`/notas/${editId}`, {
          observacoes: obs,
        });
        setObservacoes((prev) =>
          prev.map((item) => (item.id === editId ? response.data : item))
        );
        setEditId(null); // Limpa o ID de edição
      } else {
        // Caso contrário, estamos criando uma nova observação
        const response = await api.post("/notas", { observacoes: obs });
        setObservacoes((prev) => [...prev, response.data]);
      }
      setObs(""); // Limpa o campo de entrada
    } catch (error) {
      console.log("Erro ao enviar os dados para o servidor", error);
    }
  };

  const handleEdit = (obs) => {
    setObs(obs.observacoes);
    setEditId(obs.id);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notas/${id}`);
      setObservacoes((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Erro ao tentar deletar o item: ", error);
    }
  };

  useEffect(() => {
    const fetchObservacoes = async () => {
      try {
        const response = await api.get("/notas");
        setObservacoes(response.data);
      } catch (error) {
        console.log("Erro ao recuperar dados do servidor", error);
      }
    };
    fetchObservacoes();
  }, [handleSubmitNotas]);

  return (
    <div>
      <h2>Observações</h2>

      <ModalForm  onSubmit={handleSubmitNotas}>
        <div className="boardNote">
        <ModalField>
          <ModalLabel htmlFor="obs">Observação: </ModalLabel>
          <ModalInput
            value={obs}
            id="obs"
            onChange={(e) => setObs(e.target.value)}
            placeholder="Observação..."
          />
        </ModalField>
        <ModalButton type="submit">
          {editId ? "Atualizar Obs" : "Adicionar Obs"}
        </ModalButton>
        </div>
      </ModalForm>

      <h3>Lista de Observações</h3>

      <ul>
        {observacoes.map((obs) => (
          <li key={obs.id}>
            {obs.observacoes}
            <div className="btnDivision">
              <button onClick={() => handleEdit(obs)}>Editar</button>
              <button onClick={() => handleDelete(obs.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

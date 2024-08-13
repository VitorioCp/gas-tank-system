import { useState } from "react";
import { FaSignOutAlt, FaTools } from "react-icons/fa";
import {
  Flex,
  LogoutButton,
  HeaderDashboard,
  ConfigButton,
  ModalField,
  ModalLabel,
  ModalInput,
  Button,
} from "../../pages/dashboard/styles";
import { SectionButton} from "./style.js"
import "./style.css";
import axios from "axios";
import { stockTotal } from "../Estoque/index.jsx";

//Authenticated Bd
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




export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockTotalGas , setStockTotalGas] = useState(0)
  const[stockTotalAgua, setStockTotalAgua] = useState(0)

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleSubmitStockTotal = async(event) => {
    event.preventDefault();
    console.log("Chegou aqui")

    try{
      const response = await api.post("/stocktotal",{
        totalgas: stockTotalGas,
        totalagua: stockTotalAgua
      }) 
      console.log("Enviado com sucesso", response.data)
      setIsModalOpen(!isModalOpen);
      
    }catch(error){
      console.error("Erro ao tentar enviar os dados para o servidor", error)
    }
  }

  return (
    <HeaderDashboard>
      Dashboard de Depósito de Gás
      <Flex style={{ gap: "50px" }}>
        <ConfigButton onClick={toggleModal}>
          <FaTools />
          Config
        </ConfigButton>
        <LogoutButton onClick={handleLogout} style={{ marginRight: "30px" }}>
          <FaSignOutAlt />
          Logout
        </LogoutButton>
      </Flex>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Configuração de estoque Total</h3>
            <ModalField>
              <ModalLabel>Gás:</ModalLabel>
              <ModalInput
                type="number"
                id="stockTotalGas"
                onChange={(e) => setStockTotalGas(e.target.value)}
              />
            </ModalField>
            <ModalField>
              <ModalLabel>Água:</ModalLabel>
              <ModalInput
                type="number"
                id="stockTotalAgua"
                onChange={(e) => setStockTotalAgua(e.target.value)}
              />
            </ModalField>
            <SectionButton>
            <Button onClick={handleSubmitStockTotal}>Salvar</Button>
            <Button onClick={toggleModal}>Fechar</Button>
            </SectionButton>
          </div>
        </div>
      )}
    </HeaderDashboard>
  );
};

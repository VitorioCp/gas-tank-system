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
  ModalButton,
} from "../../pages/dashboard/styles";
import "./style.css";
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

    try{
      const response = await api.post("/stocktotal",{
        totalgas: stockTotalGas,
        totalagua: stockTotalAgua
      })
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
            <ModalButton onClick={handleSubmitStockTotal}>Salvar</ModalButton>
            <ModalButton onClick={toggleModal}>Fechar</ModalButton>
          </div>
        </div>
      )}
    </HeaderDashboard>
  );
};

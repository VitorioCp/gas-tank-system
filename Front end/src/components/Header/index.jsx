import { useState } from "react";
import { FaSignOutAlt, FaTools } from "react-icons/fa";
import {  Flex, LogoutButton, HeaderDashboard, ConfigButton, ModalField, ModalLabel, ModalInput, ModalButton } from "../../pages/dashboard/styles";
import "./style.css"
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
              <ModalLabel>
                Gás:  
              </ModalLabel>
              <ModalInput type="number"/>
            </ModalField>
            <ModalField>
              <ModalLabel>
                Água:  
              </ModalLabel>
              <ModalInput type="number"/>
            </ModalField>
            <ModalButton>Salvar</ModalButton>
            <ModalButton onClick={toggleModal}>Fechar</ModalButton>
          </div>
        </div>
      )}
    </HeaderDashboard>
  );
};

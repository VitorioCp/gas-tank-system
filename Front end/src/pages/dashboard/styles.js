import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff; /* Fundo branco */
  min-height: 100vh;
  justify-content: space-between;
`;

export const HeaderDashboard = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333333; /* Tom escuro */
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.2s;

  &:hover {
    color: #ff0000; /* Vermelho ao passar o mouse */
  }
`;

export const ConfigButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.2s;

  &:hover {
    color: green; /* Vermelho ao passar o mouse */
  }
`;

export const Board = styled.main`
  width: 85%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f0f0f0; /* Fundo claro */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
`;

export const Balance = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: #dcdcdc; /* Cor de fundo para destaque */
  padding: 10px;
  border-radius: 5px;
`;

export const SalesSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const SalesInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff; /* Fundo branco */
  position: relative;

  &:hover .chart {
    display: block;
  }
`;

export const SalesTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const SalesNumber = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333333; /* Tom escuro */
`;

export const ChartContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ChartLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
  color: #333333; /* Tom escuro */
`;

export const ChartNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ color }) => color};
  display: inline-block;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #555555; /* Tom escuro */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444444; /* Tom escuro ao passar o mouse */
  }
`;

export const FooterDashboard = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #333333; /* Tom escuro */
  color: white;
  text-align: center;
  font-size: 14px;
  position: relative;
  bottom: 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalField = styled.div`
  margin-bottom: 15px;
`;

export const ModalLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333333; /* Tom escuro */
`;

export const ModalInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ModalSelect = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ModalTextArea = styled.textarea`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #555555; /* Tom escuro */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444444; /* Tom escuro ao passar o mouse */
  }
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #ff0000; /* Vermelho */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: #cc0000; /* Vermelho ao passar o mouse */
  }
`;

export const NotesSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa; /* Fundo claro */
  border-radius: 5px;
`;

export const Note = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #e2e3e5; /* Fundo claro para notas */
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  background-color: #ffc107; /* Amarelo */
  border: none;
  color: white;
  padding: 5px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545; /* Vermelho */
  border: none;
  color: white;
  padding: 5px;
  margin-left: 5px;
`;

export const SettingsButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #555555; /* Cor da engrenagem */
  font-size: 24px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #000000; /* Cor ao passar o mouse */
  }
`;

export const DateDisplay = styled.div`
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333333; /* Tom escuro */
`;

export const PricingModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricingModalContent = styled.div`
  background-color: #2b2b2b;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  color: white;
`;

export const PricingModalHeader = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

export const PricingModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PricingModalField = styled.div`
  margin-bottom: 15px;
`;

export const PricingModalLabel = styled.label`
  margin-bottom: 5px;
  display: block;
`;

export const PricingModalInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const SectionButton = styled.div`
display: flex;
justify-content: space-around;
`


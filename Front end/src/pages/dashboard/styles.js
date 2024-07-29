// styles.js

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f0f2f5;
  min-height: 100vh;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
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
    color: #ff0000;
  }
`;

export const Board = styled.main`
  width: 85%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
`;

export const Balance = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
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
  background-color: #f9f9f9;
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
  color: #007bff;
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
  color: #333;
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
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
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
  color: #333;
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
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #ff0000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;

export const NotesSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

export const Note = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #e2e3e5;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

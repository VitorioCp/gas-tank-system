// StyledLogin.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e5e7eb; /* Cor de fundo */
`;

export const Card = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: #4b5563; /* Cor do texto */
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: #4b5563; /* Cor do texto */
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  color: #4b5563;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

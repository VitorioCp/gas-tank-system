import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  align-items: start;



  .top-row {
    grid-column: 0 / 3;
    display: flex;
    
    gap: 20px; /* Espaço entre Troco e Troca */
    justify-content: flex-start; /* Alinhamento à esquerda */
  }

  .top-left,
  .top-right {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Espaço entre o label e o input */
  }

  .top-left {
    flex: 1;
  }

  .top-right {
    flex: 1;
  }

  .top-left label,
  .top-right label {
    margin-bottom: 4px;
    font-weight: bold;
  }

  .top-left input,
  .top-right input {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%;
  }

  .gas {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .gas label {
    margin-bottom: 4px;
    font-weight: bold;
  }

  .gas input {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%;
  }

  .agua {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .agua label {
    margin-bottom: 4px;
    font-weight: bold;
  }

  .agua input {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%;
  }

  button {
    grid-column: 1 / 3;
    justify-self: center;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

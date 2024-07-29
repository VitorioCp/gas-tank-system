import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
`;

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const TrocoTroca = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TrocoTrocaItem = styled.div`
  flex: 1;
  margin-right: 10px;
  font-size: 1.1em;
  color: #555;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 1em;
  color: #555;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
`;
export const InfoBox = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #333;

  &:last-child {
    margin-bottom: 0;
  }
`;
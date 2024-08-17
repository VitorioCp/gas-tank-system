// style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7fafc;
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2d3748;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SuccessMessage = styled.p`
  color: #38a169;
`;

export const ErrorMessage = styled.p`
  color: #e53e3e;
`;

export const Label = styled.label`
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.2s;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #3182ce;
  color: #fff;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b6cb0;
  }
`;

export const BackToLoginButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;
  background-color: #edf2f7;
  color: #3182ce;
  font-weight: 600;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;

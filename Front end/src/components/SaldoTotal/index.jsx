import React, { useEffect, useState } from "react";
import axios from "axios";

// Função assíncrona para buscar os dados do saldo
const data = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3333/saldo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar recuperar os dados do servidor", error);
    return [];
  }
};

// Função assíncrona para calcular o saldo
const Saldo = async () => {
  const dados = await data();

  const valores = dados
    .filter((dado) => dado.valores)
    .reduce((total, dado) => total + dado.valores, 0);

  return valores;
};

// Componente React para exibir o saldo total
export const SaldoTotal = ({ saldoTotal }) => {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const fetchSaldo = async () => {
      const saldo = await Saldo();
      setValor(saldo);
    };
    fetchSaldo();
  }, []);

  return <div>Saldo total: R$ {(saldoTotal + valor).toFixed(2)}</div>;
};

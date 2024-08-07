import React from "react";

export const SaldoTotal = ({ saldoTotal }) => {
  return <>Saldo total: R$ {saldoTotal.toFixed(2)}</>; // Exibindo com duas casas decimais
};

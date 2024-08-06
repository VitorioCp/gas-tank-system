import axios from "axios";

const dados = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get("http://localhost:3333/sell", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Erro ao tentar recuperar dados do servidor", error);
    return []; 
  }
};

export const GasDinheiro = async () => {
  const sales = await dados();
  const gasVendidoDinheiro = sales
    .filter((sale) => sale.venda === "gas" && sale.paymentMethod === "Dinheiro")
    .reduce((total, sale) => total + sale.quantity, 0);
  return gasVendidoDinheiro;
};

export const GasDebito = async () => {
  const sales = await dados();
  const gasVendidoDebito = sales
    .filter((sale) => sale.venda === "gas" && sale.paymentMethod === "Debito")
    .reduce((total, sale) => total + sale.quantity, 0);
  return gasVendidoDebito;
};

export const GasCredito = async () => {
  const sales = await dados();
  const gasVendidoCredito = sales
    .filter((sale) => sale.venda === "gas" && sale.paymentMethod === "Credito")
    .reduce((total, sale) => total + sale.quantity, 0);
  return gasVendidoCredito;
};

export const GasPix = async () => {
  const sales = await dados();
  const gasVendidoPix = sales
    .filter((sale) => sale.venda === "gas" && sale.paymentMethod === "Pix")
    .reduce((total, sale) => total + sale.quantity, 0);
  return gasVendidoPix;
};

export const GalaoDinheiro = async () => {
  const sales = await dados();
  const galaoDinheiro = sales
    .filter((sale) => sale.venda === "agua" && sale.paymentMethod === "Dinheiro")
    .reduce((total, sale) => total + sale.quantity, 0);
  return galaoDinheiro;
};

export const GalaoDebito = async () => {
  const sales = await dados();
  const galaoDebito = sales
    .filter((sale) => sale.venda === "agua" && sale.paymentMethod === "Debito")
    .reduce((total, sale) => total + sale.quantity, 0);
  return galaoDebito;
};

export const GalaoCredito = async () => {
  const sales = await dados();
  const galaoCredito = sales
    .filter((sale) => sale.venda === "agua" && sale.paymentMethod === "Credito")
    .reduce((total, sale) => total + sale.quantity, 0);
  return galaoCredito;
};

export const GalaoPix = async () => {
  const sales = await dados();
  const galaoPix = sales
    .filter((sale) => sale.venda === "agua" && sale.paymentMethod === "Pix")
    .reduce((total, sale) => total + sale.quantity, 0);
  return galaoPix;
};

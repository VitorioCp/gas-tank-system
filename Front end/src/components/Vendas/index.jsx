import axios from "axios";

const dados = async () => {
  try {
    const token = localStorage.getItem("token"); // Obtém o token do localStorage
    const response = await axios.get("http://localhost:3333/sell", {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho da requisição
      },
    });
    return response.data; // Retorna os dados das vendas
  } catch (error) {
    console.error("Erro ao tentar recuperar dados do servidor", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

export const GasDinheiro = async () => {
  const sales = await dados();
  const gasVendidoDinheiro = sales.filter(
    (sale) => sale.venda === "gas" && sale.paymentMethod === "Dinheiro"
  ).length;
  return gasVendidoDinheiro;
};

export const GasDebito = async () => {
  const sales = await dados();
  const gasVendidoDebito = sales.filter(
    (sale) => sale.venda === "gas" && sale.paymentMethod === "Debito"
  ).length;
  return gasVendidoDebito;
};

export const GasCredito = async () => {
  const sales = await dados();
  const gasVendidoCredito = sales.filter(
    (sale) => sale.venda === "gas" && sale.paymentMethod === "Credito"
  ).length;
  return gasVendidoCredito;
};

export const GasPix = async () => {
    const sales = await dados();
    const gasVendidoPix = sales.filter(
      (sale) => sale.venda === "gas" && sale.paymentMethod === "Pix"
    ).length;
    return gasVendidoPix;
  };

export const GalaoDinheiro = async () => {
  const sales = await dados();
  const galaoDinheiro = sales.filter(
    (sale) => sale.venda === "agua" && sale.paymentMethod === "Dinheiro"
  ).length;
  return galaoDinheiro;
};

export const GalaoDebito = async () => {
    const sales = await dados();
    const galaoDebito = sales.filter(
      (sale) => sale.venda === "agua" && sale.paymentMethod === "Debito"
    ).length;
    return galaoDebito;
};

export const GalaoCredito = async () => {
    const sales = await dados();
    const galaoCredito = sales.filter(
      (sale) => sale.venda === "agua" && sale.paymentMethod === "Credito"
    ).length;
    return galaoCredito;
  };
  
  export const GalaoPix = async () => {
      const sales = await dados();
      const galaoPix = sales.filter(
        (sale) => sale.venda === "agua" && sale.paymentMethod === "Pix"
      ).length;
      return galaoPix;
  };
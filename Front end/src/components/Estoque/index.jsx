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

const totalEstoqueGas = 181;
const totalEstoqueGalao = 75;

// Funções Gás
export const EstoqueGasCheio = async () => {
  const sales = await dados();
  const gasVendido = sales.filter((sale) => sale.venda === "gas").length;
  const gasCheio = totalEstoqueGas - gasVendido; // Exemplo: Quantidade de gás cheio
  console.log(gasCheio);
  return gasCheio;
};

export const EstoqueGasVazio = async () => {
  const gasCheio = await EstoqueGasCheio();
  const gasVazio = totalEstoqueGas - gasCheio;
  console.log(gasVazio);
  return gasVazio;
};

// Funções Galão
export const EstoqueAguaCheio = async () => {
  const sales = await dados();
  const aguaVendido = sales.filter((sale) => sale.venda === "agua").length;
  const aguaCheio = totalEstoqueGalao - aguaVendido; // Exemplo: Quantidade de gás cheio
  console.log(aguaCheio);
  return aguaCheio;
};

export const EstoqueAguaVazio = async () => {
  const aguaCheio = await EstoqueAguaCheio();
  const aguaVazio = totalEstoqueGalao - aguaCheio;
  console.log(aguaVazio);
  return aguaVazio;
};

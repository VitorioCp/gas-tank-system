import axios from "axios";

// Função para buscar dados de vendas
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

// Função para buscar dados do estoque
const dadosStock = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3333/stock", {
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

const dadosStockTotal = async () => {
  try {
    const token = localStorage.getItem("token"); // Obtém o token do localStorage
    const response = await axios.get("http://localhost:3333/stocktotal", {
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

// Estoque total
let totalEstoqueGas = 181;
let totalEstoqueGalao = 75;

export const stockTotal = async () => {
  const stocktotal = await dadosStockTotal();

  const totalGas = stocktotal
    .filter((dados) => dados.totalgas) // Filtra apenas os dados que têm `totalgas`
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]?.totalgas; // Ordena e pega o valor de `totalgas`

  const totalAgua = stocktotal
    .filter((dados) => dados.totalagua) // Filtra apenas os dados que têm `totalagua`
    .sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )[0]?.totalagua; // Ordena e pega o valor de `totalagua`

    

  return {
    totalGas,
    totalAgua,
  };
};
const { totalGas, totalAgua } = await stockTotal();

totalEstoqueGas = totalGas || 181 ;
totalEstoqueGalao = totalAgua || 75;

// Funções Gás
export const EstoqueGasCheio = async () => {
  const sales = await dados();
  const stock = await dadosStock();

  const gasVendido = sales
    .filter((sale) => sale.venda === "gas")
    .reduce((total, sale) => total + sale.quantity, 0);
  const gasAdicionado = stock
    .filter((dado) => dado.produto === "gas")
    .reduce((total, dado) => total + dado.quantity, 0);

  const gasCheio = totalEstoqueGas + gasAdicionado - gasVendido; // Quantidade de gás cheio considerando vendas e adições
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
  const stock = await dadosStock();

  const aguaVendido = sales
    .filter((sale) => sale.venda === "agua")
    .reduce((total, sale) => total + sale.quantity, 0);
  const aguaAdicionado = stock
    .filter((dado) => dado.produto === "agua")
    .reduce((total, dado) => total + dado.quantity, 0);

  const aguaCheio = totalEstoqueGalao + aguaAdicionado - aguaVendido; // Quantidade de água cheia considerando vendas e adições
  console.log(aguaCheio);
  return aguaCheio;
};

export const EstoqueAguaVazio = async () => {
  const aguaCheio = await EstoqueAguaCheio();
  const aguaVazio = totalEstoqueGalao - aguaCheio;
  console.log(aguaVazio);
  return aguaVazio;
};

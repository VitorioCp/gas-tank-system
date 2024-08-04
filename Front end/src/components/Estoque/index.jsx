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

export const EstoqueGas = async () => {
  

  const totalEstoque = 181;
  //
  const sales = await dados(); 
  const gasVendido = sales.filter((sale) => sale.venda === "gas").length;
  const gasCheio = totalEstoque - gasVendido; // Exemplo: Quantidade de gás cheio
  console.log(gasCheio)


  const gasVazio = totalEstoque - gasCheio; // Calcula a quantidade de gás vazio

  // Retorna um objeto com os dois valores
  return {
    gasCheio,
    gasVazio,
  };
};

export const EstoqueAgua = async () => {
  const totalEstoque = 75;
  const sales = await dados(); 
  const aguaVendido = sales.filter((sale) => sale.venda === "agua").length;
  const aguaCheio = totalEstoque - aguaVendido; // Exemplo: Quantidade de gás cheio
  const AguaVazio = totalEstoque - aguaCheio; // Calcula a quantidade de gás vazio
  console.log(aguaCheio)

  // Retorna um objeto com os dois valores
  return {
    aguaCheio,
    AguaVazio,
  };
};

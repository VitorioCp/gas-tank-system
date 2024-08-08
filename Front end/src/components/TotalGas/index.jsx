import axios from "axios";

export const TotalGas = async () => {
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

  const valueTotal = async () => {
    const sales = await dados(); // Recupera os dados das vendas
    const cashSales = sales.filter(
      (sale) => sale.paymentMethod === "Dinheiro" && sale.venda === "gas"
    ); // Filtra as vendas em dinheiro
    const totalValue = cashSales.reduce(
      (total, sale) => total + sale.quantity * 80,
      0
    ); // Calcula o total

    return totalValue 
  };

  const total = await valueTotal(); // Chama a função para calcular o total
  return total; // Retorna o valor total
};

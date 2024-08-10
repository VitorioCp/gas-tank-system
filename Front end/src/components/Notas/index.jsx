export const Notas = async () => {
  const dados = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtém o token do localStorage
      const response = await axios.get("http://localhost:3333/saldo", {
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

  const DashboardNotas = async () => {
    const notas = await dados();

    const observacoes = notas.filter((nota) => nota.observacao);

    return observacoes;
  };
  const notas = await DashboardNotas();
  
  return <>
    {notas.map((nota, index)=>{
        
    })}
  </>;
};

const Sell = require("../models/Sell");

class SellRouter {
  async create(req, res) {
    const { venda, paymentMethod, quantity, observation } = req.body;

    try {
      // Cria um novo registro na tabela Sell sem passar o 'id'
      const newSell = await Sell.create({
        venda,
        paymentMethod,
        quantity,
        observation,
      });
      res.status(201).json(newSell);
    } catch (error) {
      console.error("Erro ao adicionar venda:", error);
      res.status(500).json({ error: "Erro ao adicionar venda" });
    }
  }

  async getAll(req, res) {
    try {
      const sells = await Sell.findAll();
      res.status(200).json(sells);
    } catch (error) {
      console.error("Erro ao tentar recuperar os dados do servidor", error);
      res.status(500).json({ error: "Erro ao recuperar vendas" });
    }
  }
}

module.exports = SellRouter;

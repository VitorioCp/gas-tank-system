const Sell = require("../models/Sell");

class SellRouter {
  async create(req, res) {
    const { paymentMethod, quantity, observation } = req.body;

    try {
      // Cria um novo registro na tabela Sell sem passar o 'id'
      const newSell = await Sell.create({
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
}

module.exports = SellRouter;

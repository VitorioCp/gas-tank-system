const Stock = require("../models/Stock");

class StockController {
  async create(req, res) {
    const { produto, quantity } = req.body;

    const newStock = await Stock.create({ produto, quantity });
    res.status(201).json(newStock);
  }
  async getAll(req, res) {
    try {
      const stocks = await Stock.findAll();
      res.status(200).json(stocks);
    } catch (error) {
      console.error("Erro ao tentar recuperar os dados do servidor", error);
      res.status(500).json({ error: "Erro ao recuperar o estoque" });
    }
  }
}

module.exports = StockController;

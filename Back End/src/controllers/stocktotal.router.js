const StockTotal = require("../models/stockTotal");

class StrockTotalController {
  async create(req, res) {
    const { totalgas, totalagua } = req.body;

    try {
      const newStock = await StockTotal.create({ totalgas, totalagua });
      res.status(200).json(newStock);
    } catch (error) {
      res.status(500).json({ error: "Erro ao recuperar o EstoqueTotal" });
    }
  }
  async getAll(req, res) {
    try {
      const response = await StockTotal.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Erro ao recuperar o EstoqueTotal" });
    }
  }
}

module.exports = StrockTotalController;

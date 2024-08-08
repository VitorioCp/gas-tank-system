const Saldo = require("../models/Saldo");

class SaldoController {
  async create(req, res) {
    const { valores, observacao } = req.body;

    try {
      const response = await Saldo.create({
        valores,
        observacao,
      });
      console.log("enviado com sucesso");
      res.status(201).json(response);
    } catch (error) {
      console.log("Erro ao enviar os dados para o servidor", error);
    }
  }

  async getAll(req, res) {
    try {
      const saldos = await Saldo.findAll();
      res.status(201).json(saldos);
    } catch (error) {
      console.error("Erro ao tentar recuperar os dados do servidor", error);
      res.status(500).json({ error: "Erro ao recuperar o estoque" });
    }
  }
}

module.exports = SaldoController;

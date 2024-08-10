const { where } = require("sequelize");
const Notas = require("../models/Notas");

class NotasController {
  async create(req, res) {
    const { observacoes } = req.body;

    try {
      const response = await Notas.create({ observacoes });
      console.log("Criado com sucesso");
      res.status(201).json(response);
    } catch (error) {
      console.log("Erro ao enviar os dados para o servidor", error);
      res.status(500).json({ error: "Erro ao criar nota" });
    }
  }

  async getAll(req, res) {
    try {
      const response = await Notas.findAll();
      res.status(201).json(response);
    } catch (error) {
      console.log("Erro ao enviar os dados para o servidor", error);
    }
  }

  async put(req, res) {
    const { id } = req.params;
    const { observacoes } = req.body; 
  
    try {
      const nota = await Notas.findByPk(id);
      if (!nota) {
        return res.status(404).json({ message: "Nota não encontrada" });
      }
  
      await Notas.update(
        { observacoes }, 
        { where: { id } }
      );
  
      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao tentar atualizar a nota: ", error);
      return res.status(500).json({ message: "Erro ao tentar atualizar a nota" });
    }
  }
  

  async delete(req, res) {
    const { id } = req.params;
    try {
      const nota = await Notas.findByPk(id);
      if (!nota) {
        return res.status(404).json({ message: "Nota não encontrada." });
      }

      await Notas.destroy({ where: { id } });
      return res.status(200).json({ message: "Nota excluída com sucesso" });
    } catch (error) {
      console.error("Erro ao tentar exluir a nota:", error);
      return res.status(500).json({ message: "Erro ao excluir a nota." });
    }
  }
}

module.exports = NotasController;

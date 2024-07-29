const FormStart = require("../models/FormStart");

class FormController {
  async create(req, res) {
    const {
      data, 
      troco,
      troca,
      gasTotal,
      gasCheio,
      gasVazio,
      aguaTotal,
      aguaCheia,
      aguaVazia,
    } = req.body;

    console.log(req.body);

    try {
      // Verifica se já existe um formulário com a mesma data
      const formExist = await FormStart.findOne({ where: { data } });

      if (formExist) {
        return res.status(400).json({ message: "Data already exists" });
      }

      // Cria um novo formulário
      const newForm = await FormStart.create({
        data,
        troco,
        troca,
        gasTotal,
        gasCheio,
        gasVazio,
        aguaTotal,
        aguaCheia,
        aguaVazia,
      });

      return res.status(201).json(newForm);
    } catch (error) {
      console.error("Error creating form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = FormController;

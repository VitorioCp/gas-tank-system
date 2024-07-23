const FormStart = require("../models/FormStart");

class FormController {
  async create(req, res) {
    const {
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

    const formExist = await form.findOne({ where: {data} });

    if(formExist){
        return res.status(400).json({ message: 'Data already exists' });
    }

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
    res.status(201).json(newForm);
  }
}

module.exports = FormController;

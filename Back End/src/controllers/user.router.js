const User = require("../models/User");

class UserController {
    async create(req, res) {
      const { email, login, password } = req.body;
      
      // Verificar se o e-mail já existe
      const emailExist = await User.findOne({ where: { email } });
  
      if (emailExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Criar novo usuário
      const newUser = await User.create({ email, login, password });
      res.status(201).json(newUser);
    }

    
  }
  
  module.exports = UserController;
  
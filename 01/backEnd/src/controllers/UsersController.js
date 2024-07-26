const Sequelize = require("../database");
const User = require("../database/tables/user");
const { hash } = require('bcryptjs');

class UsersController {
  async create(request, response) {
    const { email, username, password } = request.body;


    try{
      const userExist = await User.findOne({where: { email}});

      if(userExist){
        return response.status(400).json({errror: 'Email já cadastrado'})
      }
      const hashedPassword = await hash(password, 8);

      const user = await User.create({username, email, password:hashedPassword});

      return response.status(201).json(user);
    } catch (error){
      console.error(error);
      return response.status(500).json({error: 'Erro no servidor'});
    }


  }

  // async update(request, response) {
    
  // }

  // async delete(request, response){

  // }
}

module.exports = UsersController;

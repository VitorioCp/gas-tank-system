const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class LoginRouter{
    async signIn(req, res){
        const {login, password} = req.body;
        console.log(req.body)

        try{
            
            const user = await User.findOne({where: { login } });

            if(!user){
                return res.status(401).json({message: 'Usuário não encontrado'})
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)

            if(!isPasswordValid){
                return res.status(401).json({message: 'Senha incorreta'})
            }

            const token = jwt.sign(
                {
                    login: user.login , email: user.email 
                },
                process.env.JWT_SECRET,
                {expiresIn: process.env.JWT_EXPIRES_IN }
            )

            

            res.status(200).json({message: 'Login bem-sucedido', token})

        }catch(error){
            res.status(500).json({message:"Erro interno do servidor", error})
        }
        
    }
}

module.exports = LoginRouter;
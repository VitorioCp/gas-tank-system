const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

class LoginRouter {
  async signIn(req, res) {
    const { login, password } = req.body;
    console.log(req.body);

    try {
      const user = await User.findOne({ where: { login } });

      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Senha incorreta" });
      }

      const token = jwt.sign(
        {
          login: user.login,
          email: user.email,
        },
        SECRET, // Usar a constante SECRET
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      res.status(200).json({ token }); // Retornar o token com status 200
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor", error });
    }
  }
}

const verificarToken = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1]; // Correção aqui

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: "Não autorizado!",
    });
  }

  try {
    jwt.verify(token, SECRET);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ // Alterei o status de 500 para 401 para refletir que o token é inválido
      statusCode: 401,
      message: "Token não válido",
    });
  }
};

module.exports = { LoginRouter, verificarToken };
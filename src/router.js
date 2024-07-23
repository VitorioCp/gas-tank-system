const express = require("express");
const router = express.Router();
const UserController = require("./controllers/user.router");
const LoginController = require("./controllers/login.router");
const jwt = require("jsonwebtoken");
const FormStart = require("./models/FormStart");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).send({ message: "Token não fornecido" });
  }
  const token = authHeader.split(" ")[1]; // Corrigido aqui

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: "Falha ao autenticar o token" });
    }

    req.userId = decoded.id;
    next();
  });
};

//userController
const userController = new UserController();
router.post("/users", (req, res) => userController.create(req, res));

//LoginController
const loginController = new LoginController();

router.post("/login", (req, res) => loginController.signIn(req, res));

//Form

const formStart = new FormStart();

router.post("/form", (req, res) => formStart.create(req, res));

module.exports = router;

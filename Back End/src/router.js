const express = require("express");
const router = express.Router();
const UserController = require("./controllers/user.router");
const { LoginRouter, verificarToken } = require("./controllers/login.router");
const jwt = require("jsonwebtoken");
const FormController = require("./controllers/form.router");
const SellController = require("./controllers/sell.router.js");
const StockController = require("./controllers/stock.router.js");

//userController
const userController = new UserController();
router.post("/users", (req, res) => userController.create(req, res));

//LoginController
const loginRouter = new LoginRouter();

router.post("/login", (req, res) => loginRouter.signIn(req, res));

//Form

const formController = new FormController();

router.post("/form", verificarToken, (req, res) =>
  formController.create(req, res)
);


//Sell -> Destinado a entrada de novas vendas
const sellController = new SellController();

router.post("/sell", verificarToken, (req, res) =>
  sellController.create(req, res)
);

router.get("/sell", verificarToken, (req, res) =>
  sellController.getAll(req, res)
);

//Estoque -> Destinado a todas informações de quantidade de produtos no estoque

const stockController = new StockController();

router.post("/stock", verificarToken, (req, res) => stockController.create(req, res))


//verify-token

router.get("/verify-token", verificarToken, (req, res) => {
  res.status(200).json({ message: "Token válido" });
});
module.exports = router;

const express = require("express");
const router = express.Router();
const UserController = require("./controllers/user.router");
const { LoginRouter, verificarToken } = require("./controllers/login.router");
const jwt = require("jsonwebtoken");
const FormController = require("./controllers/form.router");
const SellController = require("./controllers/sell.router.js");
const StockController = require("./controllers/stock.router.js");
const SaldoController = require("./controllers/saldo.router.js");
const NotasController = require("./controllers/notas.router.js");
const StrockTotalController = require("./controllers/stocktotal.router.js");

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

router.get("/stock", verificarToken, (req, res) => stockController.getAll(req,res))


//Saldo -> Onde sera armazenado variaveis no valor do caixa podendo ser de adição e subtração
const saldoController = new SaldoController();

router.post("/saldo", verificarToken, (req, res) => saldoController.create(req,res) )
router.get("/saldo", verificarToken, (req, res) => saldoController.getAll(req,res) )

//Notas -> Armazenamento de observações

const notasController = new NotasController();

router.post("/notas", verificarToken, (req, res) =>notasController.create(req,res))
router.get("/notas", verificarToken, (req, res) =>notasController.getAll(req,res))
router.put("/notas/:id", verificarToken, (req,res) => notasController.put(req,res))
router.delete("/notas/:id", verificarToken, (req,res) => notasController.delete(req,res))

//Estoque total -> Será armazenado o estoque total

const stockTotalController = new StrockTotalController()

router.post("/stocktotal", verificarToken, (req, res) => stockTotalController.create(req,res))
router.get("/stocktotal", verificarToken, (req, res) => stockTotalController.getAll(req,res))



//verify-token

router.get("/verify-token", verificarToken, (req, res) => {
  res.status(200).json({ message: "Token válido" });
});
module.exports = router;

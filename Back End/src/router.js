const express = require("express");
const router = express.Router();
const UserController = require("./controllers/user.router");
const {LoginRouter, verificarToken } = require("./controllers/login.router");
const jwt = require("jsonwebtoken");
const FormController = require("./controllers/form.router");

//userController
const userController = new UserController();
router.post("/users", (req, res) => userController.create(req, res));

//LoginController
const loginRouter = new LoginRouter();

router.post("/login", (req, res) => loginRouter.signIn(req, res));

//Form

const formController = new FormController();

router.post("/form", verificarToken, (req, res) => formController.create(req, res));

//verify-token

router.get('/verify-token', verificarToken, (req, res) => {
    res.status(200).json({ message: 'Token válido' });
});
module.exports = router;
 
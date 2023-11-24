import express from "express";
import LoginController  from "../controllers/loginController.js";

const loginRoutes = express.Router()

loginRoutes.all('/login', LoginController);
loginRoutes.get('/logout', LoginController);


export default loginRoutes;
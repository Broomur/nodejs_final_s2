import express from "express";
import { loginController } from "../controllers/loginController.js";

const loginRoutes = express.Router()

loginRoutes.get('/login', loginController)


export default loginRoutes;
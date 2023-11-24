import express from "express";
import HomeController from "../controllers/homeController.js";
import DashboardController from "../controllers/dashboardController.js";
import AuthMiddleware from "../middlewares/authMiddleware.js";

const globalRoutes = express.Router();

globalRoutes.get('/', HomeController);

globalRoutes.get('/dashboard', AuthMiddleware, DashboardController);


export default globalRoutes;
import express from "express";
import { HomeController } from "../controllers/homeController.js";

const globalRoutes = express.Router()

globalRoutes.get('/', HomeController)

// globalRoutes.get('/dashboard',protectedDashboard);


export default globalRoutes;
import express from "express";

import RegisterController from "../controllers/registerController.js";

const registerRoutes = express.Router();

registerRoutes.all('/register', RegisterController);

export default registerRoutes;
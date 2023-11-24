import express from "express";
import { stat } from "node:fs";
import { join } from "node:path";
import dotenv from "dotenv";
import globalRoutes from "./routes/globalRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
dotenv.config();

const app = express();

const cwd = process.cwd();

const staticPath = join(cwd, 'public');
const viewPath = join(cwd, 'views');

const { PORT, HOST } = process.env;

app.use(express.static(staticPath));

app.use(express.urlencoded({
	extended: false
}));

app.set("view engine", "pug");

app.use(globalRoutes);
app.use(registerRoutes)

app.listen(PORT, HOST, () => {
	console.log(`Listening on http://${HOST}:${PORT}`);
});
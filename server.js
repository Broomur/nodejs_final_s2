import express from "express";
import { stat } from "node:fs";
import { join } from "node:path";
import dotenv from "dotenv";
import globalRoutes from "./routes/globalRoutes.js";
<<<<<<< HEAD
import loginRoutes from "./routes/loginRoutes.js";
=======
import registerRoutes from "./routes/registerRoutes.js";
>>>>>>> f4a376a (register ok)
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
<<<<<<< HEAD
app.use(loginRoutes);
=======
app.use(registerRoutes)
>>>>>>> f4a376a (register ok)

app.listen(PORT, HOST, () => {
	console.log(`Listening on http://${HOST}:${PORT}`);
});
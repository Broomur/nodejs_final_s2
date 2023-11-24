import express from "express";
import session from "express-session";
import { stat } from "node:fs";
import { join } from "node:path";
import dotenv from "dotenv";
import globalRoutes from "./routes/globalRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
dotenv.config();

const app = express();

const cwd = process.cwd();

const staticPath = join(cwd, 'public');


const { PORT, HOST } = process.env;

app.use(express.static(staticPath));
app.use(session({
	name: "user",
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))
app.use(express.urlencoded({
	extended: false
}));

app.set("view engine", "pug");

app.use(globalRoutes);
app.use(loginRoutes);
app.use(registerRoutes)

app.listen(PORT, HOST, () => {
	console.log(`Listening on http://${HOST}:${PORT}`);
});
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

const LoginController = async (req, res) => {
	if (req.method === "GET") {
		if (req.path === "/login") {
			const message = req.session.message ? req.session.message : undefined;
			req.session.message = undefined;
			res.render("pages/login", { title: "Login", message: message, auth: req.session.auth });
		} else if (req.path === "/logout") {
			req.session.message = { status: true, message: "See you soon ;)" };
			req.session.auth = false;
			res.redirect("/");
		}
	} else if(req.method === "POST") {
		const {email, password} = req.body;
		if(!email || !password) {
			req.session.message = { status: false, message: "Merci de remplir tout les champs" };
			res.redirect("/login");
		} else if(email && password) {
			const hashedPswd = CryptoJS.HmacSHA256(password, process.env.SECRET);
			const user = await User.findOne({ email: email, password: hashedPswd });
			if (user) {
				req.session.auth = true;
				req.session.message = { status: true, message: "Connexion reussie" };
				res.redirect("/dashboard");
			} else {
				req.session.auth = false;
				req.session.message = { status: false, message: "Mauvais email/mot de passe..." };
				res.redirect("/login");
			}

		}
	}
};

export default LoginController;
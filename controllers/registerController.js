import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

const RegisterController = async (req, res) => {
	if (req.method === "GET") {
		const message = req.session.message ? req.session.message : undefined;
		req.session.message = undefined;
		res.render("pages/register", { title: "Register", message: message, auth: req.session.auth });
	} else if (req.method === "POST") {
		const { firstname, lastname, email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (user) {
			req.session.message = { status: false, message: "Un compte avec cette adresse email existe déjà." };
			res.redirect("/login");
		} else {
			const newUser = {
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: CryptoJS.HmacSHA256(password, process.env.SECRET)
			}
			try {
				req.session.message = { status: true, message: "Inscription réussie !" };
				res.redirect("/login");
				await User.create(newUser);
			} catch (error) {
				console.log(error.message);
				req.session.message = { status: false, message: "Échec de l'inscription." };
				res.status(500).redirect("/register");
			}
			
		}
	}
};

export default RegisterController;
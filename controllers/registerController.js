import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

export const RegisterController = async (req, res) => {
	if (req.method === "GET") {
		res.render("pages/register", { title: "Register" });
	} else if (req.method === "POST") {
		const { firstname, lastname, email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (user) {
			res.redirect("/login");
		} else {
			const newUser = {
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: CryptoJS.HmacSHA256(password, process.env.SECRET)
			}
			try {
				await User.create(newUser);
				res.render("pages/register", { title: "Register", message: "Inscription réussie !" });
			} catch (error) {
				res.render("pages/register", { title: "Register", message: "Échec de l'inscription" });
			}
		}
	}
};
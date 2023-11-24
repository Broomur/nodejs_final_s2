import crypto from 'crypto-js';
import session from 'express-session';

export const loginController = (req, res) => {
	if (req.method === "GET") {
		res.render("pages/login", { title: "Login"});
	}


    if(req.method === "POST") {
		const {email, password} = req.body
		const {email: e, password: p} = user

		req.session.auth = false

		if(!email || !password) {
			req.session.message = 'Merci de remplir tout les champs';
			res.redirect('/')
			return
		}

		if(email === e && SHA256(password).toString() === p) {
			req.session.auth = true;
			req.session.message = 'Connexion reussi';

			res.redirect('/dashboard');
			return
		}

		req.session.message = 'Mauvais identifiant'
		res.redirect('/')
	}
};

export const dashboard = (req,res) => {
    res.render("pages/Dashboard", { title: "Dashboard"});
}

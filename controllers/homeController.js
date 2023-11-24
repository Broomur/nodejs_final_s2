const HomeController = (req, res) => {
	if (req.method === "GET") {
		const message = req.session.message ? req.session.message : undefined;
		req.session.message = undefined;
		res.render("pages/home", { title: "Home", message: message, auth: req.session.auth });
	}
};

export default HomeController;

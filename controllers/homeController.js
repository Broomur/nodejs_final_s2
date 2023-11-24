export const HomeController = (req, res) => {
	if (req.method === "GET") {
		res.render("pages/home", { title: "Home"});
	}
};
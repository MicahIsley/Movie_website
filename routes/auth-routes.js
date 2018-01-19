var router = require("express").Router();
var passport = require("passport");
var path = require("path");

router.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname + "/../login.html"));
});

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

router.get("/google", passport.authenticate("google", {
	scope: ["profile"]
}));

router.get("/google/redirect", passport.authenticate('google', { failureRedirect: "/"}), 
	function (req, res) {
	console.log(`
				req.session: ${JSON.stringify(req.session)}`);
	res.redirect("/index");
});

module.exports = router;
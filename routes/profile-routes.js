var router = require("express").Router();

var authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/auth/login');
	} else {
		next();
	}
};

router.get("/", authCheck, (req, res) => {
	res.redirect("/index");
});

module.exports = router;
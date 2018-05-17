var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../login.html"));
	});

	app.get("/index", function(req, res) {
		res.sendFile(path.join(__dirname + "/../index.html"));
	});

	app.get("/custom", function(req, res) {
		res.sendFile(path.join(__dirname + "/../custom.html"));
	});
};
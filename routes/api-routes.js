var Ranking = require("../models/Ranking.js");
var User = require("../models/User.js");
var Online = require("../models/Online.js");
var Multiplayer = require("../models/Multiplayer.js");
var Voting = require("../models/Voting.js");
var Compiled = require("../models/Compiled.js");
var express = require('express');

module.exports = function(app) {
	app.post("/rankings/:name", function(req, res) {
		var newRanking = new Ranking(req.body);
		newRanking.save(function (err, doc){
			if(err) {
				console.log("Error saving data to the database." + err);
			} else {
				console.log("Ranking Data Saved");
				res.send(doc);
			}
		});
	});

	app.post("/compiled/:name", function(req, res) {
		var newCompiled = new Compiled(req.body);
		newCompiled.save(function (err, doc) {
			if(err) {
				console.log("Error saving data to the database." + err);
			} else {
				console.log("Compiled Data Saved");
				res.send(doc);
			}
		});
	});

	app.post("/multiplayer/:name", function(req, res) {
		var newMultiplayer = new Multiplayer(req.body);
		newMultiplayer.save(function (err, doc) {
			if(err) {
				console.log("Error saving data to the database." + err);
			} else {
				console.log("Multiplayer Data Saved");
				res.send(doc);
			}
		});
	});

	app.post("/online/:user", function(req, res) {
		var newOnline = new Online(req.body);
		newOnline.save(function (err, doc){
			if(err) {
				console.log("Error" + err);
			}else {
				console.log("Player Online");
				res.send(doc);
			}
		});
	});

	app.post("/newVoting", function(req, res) {
		var newVoting = new Voting(req.body);
		newVoting.save(function (err, doc){
			if(err) {
				console.log("Error" + err);
			}else {
				console.log("Check Voting");
				res.send(doc);
			}
		});
	});

	app.delete("/online/delete/:user", function(req, res) {
		Online.remove({ username: req.params.user}, function (err) {
			if (err) return handleError(err);
		});
		/*Online.remove({}, function(err) {});*/
	});

	app.delete("/multiplayer/deleteAll", function(req, res) {
		Multiplayer.remove({}, function(err, doc) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.delete("/voting/deleteAll", function(req, res) {
		Voting.remove({}, function(err, doc) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.delete("/compiled/deleteAll", function(req, res) {
		Compiled.remove({}, function(err, doc) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/rankings", function(req, res) {
		Ranking.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/compiled", function(req, res) {
		Compiled.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/users", function(req, res) {
		User.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/online", function(req, res) {
		Online.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/multiplayer", function(req, res) {
		Multiplayer.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.get("/voting", function(req, res) {
		Voting.find({}, function(error, doc) {
			if (error) {
				res.send(error);
			}
			else {
				res.send(doc);
			}
		});
	});

	app.put("/online/updateReady/:username", function(req, res) {
		Online.update({username: req.params.username}, {
			ready: true
		}, function(err, doc) {
			if(err) {
				res.send(err);
			}
			else {
				res.json(doc);
			}
		});
	});

	app.put("/voting/updateLeft", function(req, res) {
		console.log("vote");
		Voting.update({_id: 1}, { $inc: { left: 1, votes: 1 } },
		function(error, doc) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(doc);
				console.log(doc);
			}
		});
	});

	app.put("/voting/updateRight", function(req, res) {
		console.log("vote");
		Voting.update({_id: 1}, { $inc: { right: 1, votes: 1 } },
		function(error, doc) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(doc);
				console.log(doc);
			}
		});
	});

	app.put("/voting/reset", function(req, res) {
		console.log("vote");
		Voting.update({_id: 1}, {
			left: 0,
			right: 0,
			votes: 0
		},
		function(error, doc) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(doc);
				console.log(doc);
			}
		});
	});

	app.get("/rankings/:user", function(req, res) {
		console.log(req.params.user);
		Ranking.findOne({
			user: req.params.user
		}, function(error, doc) {
			if(error) {
				res.send(error);
			}
			else {
				res.json(doc);
			}
		});
	});

	app.get("/api/userInfo/:id", function(req, res) {
		User.findOne({
			googleId: req.params.id
		}).then(function(results) {
			res.json(results);
		});
	});

	app.get("/user", (req, res, next) => {
		if(req.user) {
			return res.status(200).json({
				user: req.user,
				authenticated: true
			});
		} else {
			return res.status(401).json({
				error: "User is not authenticated",
				authenticated: false
			});
		}
	});
};
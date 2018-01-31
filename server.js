// Dependencies
// =============================================================
var express = require("express");
var cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var authRoutes = require("./routes/auth-routes");
var profileRoutes = require("./routes/profile-routes");
var passportSetup = require("./config/passport-setup");
var keys = require("./config/keys");
var LocalStrategy = require("passport-local").Strategy;
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/User.js");
var expressValidator = require("express-validator");

mongoose.Promise = global.Promise;
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(expressValidator());
app.use(cookieParser());
app.use(require("express-session")({
	secret: "keyboard cat",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// Static directory
app.use(express.static("assets"));

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds119088.mlab.com:19088/heroku_77d6738c");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});


// Routes
// =============================================================
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
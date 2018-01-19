var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username: String,
	googleId: String
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
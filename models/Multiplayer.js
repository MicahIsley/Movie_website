var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MultiplayerSchema = new Schema({
	user: {
		type: String,
		required: true
	},
	ranking: {
		type: [],
		required: true
	}
});

var Multiplayer = mongoose.model("Multiplayer", MultiplayerSchema);
module.exports = Multiplayer;
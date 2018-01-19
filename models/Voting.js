var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VotingSchema = new Schema({
	_id: Number,
	randNum: Number,
	left: {
		type: Number,
		default: 0
	},
	right: {
		type: Number,
		default: 0
	},
	votes: {
		type: Number,
		default: 0
	}
});

var Voting = mongoose.model("Voting", VotingSchema);

module.exports = Voting;
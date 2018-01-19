var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RankingSchema = new Schema({
	user: {
		type: String,
		required: true
	},
	ranking: {
		type: [],
		required: true
	}
});

var Ranking = mongoose.model("Ranking", RankingSchema);
module.exports = Ranking;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompiledSchema = new Schema({
	user: {
		type: String,
		required: true
	},
	ranking: {
		type: [],
		required: true
	}
});

var Compiled = mongoose.model("Compiled", CompiledSchema);
module.exports = Compiled;
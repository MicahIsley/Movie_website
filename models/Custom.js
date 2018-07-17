var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CustomSchema = new Schema({
	user: {
		type: String,
		required: true
	},
	customList: {
		type: [],
		required: true
	},
	listName: {
		type: String,
		required: true
	}
});

var Custom = mongoose.model("Custom", CustomSchema);
module.exports = Custom;
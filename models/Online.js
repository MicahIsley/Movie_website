var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OnlineSchema = new Schema({
	username: String,
	ready: {
		type: Boolean,
		default: false
	}
});

var Online = mongoose.model("Online", OnlineSchema);

module.exports = Online;
const mongoose = require("mongoose");

const Item = mongoose.Schema({
	value: String,
	icon_url: String,
	created_at: String,
	updated_at: String
});

module.exports = mongoose.model("Item", Item);

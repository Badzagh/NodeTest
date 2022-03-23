const mongoose = require("mongoose");

const Item = mongoose.Schema({
	value: String,
	icon_url: String,
	created_at: String,
	updated_at: String,
	is_deleted: String,
	opacity: String,
    text_decoration: String
});

module.exports = mongoose.model("Item", Item);

const Item = require("../models/Item");

exports.getAllItems = async (req, res) => {
    let items = await Item.find();
    res.send(items);
}

exports.addItems = async (req, res) => {
    const addItem = new Item({
		value: req.body.value,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
        is_deleted: req.body.is_deleted,
        opacity: req.body.opacity,
        text_decoration: req.body.text_decoration
	})

    await addItem.save();
    res.send(addItem);
}

exports.changeItems = async (req, res) => {
    const updateItem = await Item.findOne({ _id: req.params.id });

    if (req.body.is_deleted) {
		updateItem.is_deleted = req.body.is_deleted;
	}
    if (req.body.updated_at) {
		updateItem.created_at = req.body.updated_at;
	}
    if (req.body.opacity) {
		updateItem.opacity = req.body.opacity;
	}
    if (req.body.text_decoration) {
		updateItem.text_decoration = req.body.text_decoration;
	}

	await updateItem.save();
	res.send(updateItem);
}



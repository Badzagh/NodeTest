const express = require("express");
const itemUrl = express.Router();

const itemsController = require('../controllers/item.controller');

itemUrl.get('/', itemsController.getAllItems);

itemUrl.post('/add', itemsController.addItems);

itemUrl.put('/change/:id', itemsController.changeItems);


module.exports = itemUrl;
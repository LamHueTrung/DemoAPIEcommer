const express = require('express');
const router = express.Router();
const AddProductToCartController = require('../controllers/commands/Cart/addProduct');

// Commands
router.post('/add', AddProductToCartController.handle);

module.exports = router;

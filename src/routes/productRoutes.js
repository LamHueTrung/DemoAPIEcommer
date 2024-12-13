const express = require('express');
const router = express.Router();

const CreateProductController = require('../controllers/commands/Product/create');
const UpdateProductController = require('../controllers/commands/Product/update');
const DeleteProductController = require('../controllers/commands/Product/delete');
const GetAllProductsController = require('../controllers/queries/Product/getAll');
const GetProductByIdController = require('../controllers/queries/Product/getById');

// Commands
router.post('/', CreateProductController.handle);
router.put('/:id', UpdateProductController.handle);
router.delete('/:id', DeleteProductController.handle);

// Queries
router.get('/', GetAllProductsController.handle);
router.get('/:id', GetProductByIdController.handle);

module.exports = router;

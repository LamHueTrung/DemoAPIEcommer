const express = require('express');
const router = express.Router();

const CreateOrderController = require('../controllers/commands/Order/create');
const UpdateOrderController = require('../controllers/commands/Order/update');
const DeleteOrderController = require('../controllers/commands/Order/delete');
const GetAllOrdersController = require('../controllers/queries/Order/getAll');
const GetOrderByIdController = require('../controllers/queries/Order/getById');

// Commands
router.post('/', CreateOrderController.handle); // Tạo đơn hàng
router.put('/:id', UpdateOrderController.handle); // Cập nhật đơn hàng
router.delete('/:id', DeleteOrderController.handle); // Xóa đơn hàng

// Queries
router.get('/', GetAllOrdersController.handle); // Lấy tất cả đơn hàng
router.get('/:id', GetOrderByIdController.handle); // Lấy đơn hàng theo ID

module.exports = router;

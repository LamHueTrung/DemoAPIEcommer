const express = require('express');
const router = express.Router();

const CreatePaymentController = require('../controllers/commands/Payment/create');
const UpdatePaymentController = require('../controllers/commands/Payment/update');
const DeletePaymentController = require('../controllers/commands/Payment/delete');
const GetAllPaymentsController = require('../controllers/queries/Payment/getAll');
const GetPaymentByIdController = require('../controllers/queries/Payment/getById');

// Commands
router.post('/', CreatePaymentController.handle); // Tạo thanh toán
router.put('/:id', UpdatePaymentController.handle); // Cập nhật thanh toán
router.delete('/:id', DeletePaymentController.handle); // Xóa thanh toán

// Queries
router.get('/', GetAllPaymentsController.handle); // Lấy tất cả thanh toán
router.get('/:id', GetPaymentByIdController.handle); // Lấy thanh toán theo ID

module.exports = router;

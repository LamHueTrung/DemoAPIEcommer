const express = require('express');
const router = express.Router();

const CreateReviewController = require('../controllers/commands/Review/create');
const DeleteReviewController = require('../controllers/commands/Review/delete');
const GetAllReviewsController = require('../controllers/queries/Review/getAll');

// Commands
router.post('/', CreateReviewController.handle); // Tạo đánh giá
router.delete('/:id', DeleteReviewController.handle); // Xóa đánh giá

// Queries
router.get('/:productId', GetAllReviewsController.handle); // Lấy tất cả đánh giá cho một sản phẩm

module.exports = router;

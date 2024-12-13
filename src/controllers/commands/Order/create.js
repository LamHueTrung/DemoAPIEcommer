const Order = require('../../../models/Order');
const Validator = require('../../../utils/validators');
const logger = require('../../../config/logger');
const messages = require('../../../utils/messages');

/**
 * Controller xử lý API tạo đơn hàng
 */
class CreateOrderController {
    /**
     * Validator cho API tạo đơn hàng
     * 
     * Chức năng: Kiểm tra tính hợp lệ của danh sách sản phẩm và tổng số tiền.
     * 
     * @param {Object} req - Đối tượng request từ client.
     * @returns {Array<string>|null} - Trả về mảng các lỗi nếu có, hoặc `null` nếu hợp lệ.
     */
    static async validator(req) {
        const { products, totalAmount } = req.body;

        return Validator.validateAll([
            Validator.arrayNotEmpty(products, messages.order.validation.notEmpty('Products')),
            Validator.isPositiveNumber(totalAmount, messages.order.validation.isPositiveNumber('Total Amount')),
        ]);
    }

    /**
     * Xử lý API tạo đơn hàng
     * 
     * @param {Object} req - Đối tượng request từ client.
     * @param {Object} res - Đối tượng response để gửi phản hồi.
     */
    static async handle(req, res) {
        try {
            const errors = await CreateOrderController.validator(req);
            if (errors) {
                logger.warn(`Tạo đơn hàng thất bại: ${JSON.stringify(errors)}`);
                return res.status(400).json({ errors });
            }

            const { products, totalAmount } = req.body;
            const userId = req.user.id;

            const order = await Order.create({
                user: userId,
                products,
                totalAmount,
            });

            logger.info(`Đơn hàng mới được tạo cho người dùng: ${userId}`);
            return res.status(201).json({
                message: messages.order.success.orderCreated,
                order,
            });
        } catch (error) {
            logger.error(`Lỗi khi tạo đơn hàng: ${error.message}`);
            return res.status(500).json({
                message: messages.order.error.creatingOrder,
                error: error.message,
            });
        }
    }
}

module.exports = CreateOrderController;

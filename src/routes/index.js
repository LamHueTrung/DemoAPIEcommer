const express = require('express');
const router = express.Router();

const user = require('./userRoutes');
const product = require('./productRoutes');
const order = require('./orderRoutes');
const payment = require('./paymentRoutes');
const review = require('./reviewRoutes');

// User route
router.use('/api/user', user);

// Product route
router.use('/api/product', product);

// Order route
router.use('/api/order', order);

// Payment route
router.use('/api/payment', payment);

// Review route
router.use('/api/review', review);

module.exports = router;

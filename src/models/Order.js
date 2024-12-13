const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
        amount: { type: Number, required: true },
        status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
        method: { type: String, enum: ['cash', 'card'], required: true },
        transactionId: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);

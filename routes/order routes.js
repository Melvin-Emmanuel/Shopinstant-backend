const express = require('express');
const router = express.Router();
const {
  addOrderItems,
    getOrderById,
      updateOrderToPaid,
        updateOrderToDelivered,
          getMyOrders,
            getOrders,
            } = require('../controllers/orderController');

            const { protect, admin } = require('../middleware/authMiddleware');

            // Create new order
            router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);

            // Get user's orders
            router.route('/myorders').get(protect, getMyOrders);

            // Get order by ID
            router.route('/:id').get(protect, getOrderById);

            // Update to paid
            router.route('/:id/pay').put(protect, updateOrderToPaid);

            // Update to delivered (admin only)
            router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

            module.exports = router;
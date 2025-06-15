const express = require('express');
const router = express.Router();
const {
  getProducts,
    getProductById,
      deleteProduct,
        createProduct,
          updateProduct,
            createProductReview,
            } = require('../controllers/productController');

            const { protect, admin } = require('../middleware/authMiddleware');

            // Public routes
            router.route('/').get(getProducts).post(protect, admin, createProduct);
            router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);

            // Review route (authenticated users)
            router.route('/:id/reviews').post(protect, createProductReview);

            module.exports = router;
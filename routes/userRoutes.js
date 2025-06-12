const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
   } = require('../controllers/authController');

const { protect, admin } = require('../middleware/authMiddleware');

   router.post('/register', registerUser);
   router.post('/login', authUser);

                
   router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

        
  router.route('/').get(protect, admin, getUsers);
  router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

  module.exports = router;
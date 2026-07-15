import express from 'express';
import {
  getUser,
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getUser).post(registerUser);
router.post('/login', loginUser);
router.route('/:id').delete(protect, deleteUser).put(protect, updateUser);

export default router;

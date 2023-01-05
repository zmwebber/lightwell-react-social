import express from 'express';
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/user.controller')
const { protect } = require('../middleware/authMiddleware')

router.route('/users/add')
    .post(registerUser);
router.route('/users/login')
    .post(loginUser);
router.route('/users/me')
    .put(getMe);

export default router;
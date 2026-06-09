const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { getMe, updateProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/', verifyToken, getMe);
router.put('/me', verifyToken, updateProfile);

module.exports = router;
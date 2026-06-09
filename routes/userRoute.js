const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { getMe } = require('../controllers/userController');
const router = express.Router();

router.get('/', verifyToken, getMe);

module.exports = router;
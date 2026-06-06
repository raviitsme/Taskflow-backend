const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, (req, res) => {
    res.status(200).json({
        success : true,
        user : req.user,
    });
});

module.exports = router;
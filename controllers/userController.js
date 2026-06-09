const mongoose = require('mongoose');
const User = require('../models/User');

exports.getMe = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json({
            success : true,
            user,
        })
    } catch (e) {
        console.error(e);
        res.json({
            success : false,
            message : "Server Error",
        })
    }
}
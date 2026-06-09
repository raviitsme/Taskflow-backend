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

exports.updateProfile = async(req, res) => {
    try {
        const { name, email } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                name,
                email,
            },
            { returnDocument : 'after', runValidators : true }
        ).select("-password");

        res.json({
            success : true,
            message : "Profile Updated Successfully.",
            user
        });
    } catch (e) {
        console.error(e);
        res.json({
            success : false,
            message : "Server error"
        })
    } 
}
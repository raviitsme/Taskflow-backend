const moongoose = require("mongoose");
require('dotenv').config();

const connectDB = async() => {
    try {
        await moongoose.connect(process.env.MONGO_URI_1);
        console.log("Connected to DB");
    } catch (e) {
        console.error("Error connecting to mongoDB", e.message);
        process.exit(1);
    }
}

module.exports = connectDB;
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["IN_PROGRESS", "DONE"],
      default: "IN_PROGRESS",
    },

    dueDate: {
      type: Date,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    priorityOrder : {
      type : Number,
      default : 2,
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);

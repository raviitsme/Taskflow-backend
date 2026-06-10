const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;

    const search = req.query.search || "";
    const priority = req.query.priority || "All";

    const skip = (page - 1) * limit;

    const status = req.query.status || "All";

    const query = {
      userId: req.user.id,
    };

    if (status != "All") {
      query.status = status;
    }

    // Search
    if (search) {
      query.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const allTasks = await Task.find({ userId: req.user.id });


    // Priority Filter
    if (priority !== "All") {
      query.priority = priority;
    }
    const totalTasks = await Task.countDocuments(query);

    const tasks = await Task.find(query)
      .sort({
        priorityOrder: 1,
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      tasks,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks,
    });
  } catch (e) {
    console.error("DB Error:", e);

    res.status(500).json({
      success: false,
      message: "Error fetching tasks",
    });
  }
};

// Create new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    const priorityMap = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    const task = await Task.create({
      title,
      description,
      priority,
      priorityOrder: priorityMap[priority],
      dueDate,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Task created",
      task,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete tasks
exports.deleteTasks = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted",
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Toggle task
exports.toggleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    task.status = task.status === "DONE" ? "IN_PROGRESS" : "DONE";

    await task.save();

    res.status(200).json({
      success: true,
      task,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Edit Task
exports.updateTask = async (req, res) => {
  try {
    if (req.body.priority) {
      const priorityMap = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      req.body.priorityOrder = priorityMap[req.body.priority];
    }

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task updated",
      task,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

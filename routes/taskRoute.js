const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTasks, toggleTask, updateTask } = require('../controllers/taskController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTasks);
router.patch('/:id/toggle', verifyToken, toggleTask);
router.put('/:id/update', verifyToken, updateTask);

module.exports = router;
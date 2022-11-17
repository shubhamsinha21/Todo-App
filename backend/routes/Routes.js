const { Router } = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/controller");
const router = Router()

// handling get request
router.get('/', getTodo)
router.post('/save', saveTodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)

module.exports = router;

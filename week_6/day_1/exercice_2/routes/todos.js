const express = require("express");
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [
	{ id: 1, task: 'Learn Express', done: false },
	{ id: 2, task: 'Build an API', done: false }
];

// Get all to-do items
router.get("/", (req, res) => {
	res.json(todos);
}
);

// Add a new to-do item
router.post("/", (req, res) => {
	const { task } = req.body;
	if (!task) {
		return res.status(400).json({ message: "❌ Task is required" });
	}

	const newTodo = {
		id: todos.length + 1,
		task,
		done: false
	};

	todos.push(newTodo);
	res.status(201).json(newTodo);
});
// Update a to-do item by ID
router.post("/:id", (req, res) => {
	const { id } = req.params;
	const { task, done } = req.body;

	const todo = todos.find(t => t.id === parseInt(id));
	if (!todo) {
		return res.status(404).json({ message: "❌ To-do item not found" });
	}

	if (task !== undefined) {
		todo.task = task;
	}
	if (done !== undefined) {
		todo.done = done;
	}

	res.json(todo);
});

// Delete a to-do item by ID
router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const index = todos.findIndex(t => t.id === parseInt(id));

	if (index === -1) {
		return res.status(404).json({ message: "❌ To-do item not found" });
	}

	todos.splice(index, 1);
	res.status(204).send(); // No content
});
// Get a specific to-do item by ID
router.get("/:id", (req, res) => {
	const { id } = req.params;
	const todo = todos.find(t => t.id === parseInt(id));

	if (!todo) {
		return res.status(404).json({ message: "❌ To-do item not found" });
	}

	res.json(todo);
});

module.exports = router;
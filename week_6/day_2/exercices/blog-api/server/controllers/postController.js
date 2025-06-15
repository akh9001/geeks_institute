const db = require('../models/db');

// Get all posts
exports.getAllPosts = async (req, res) => {
	try {
		const posts = await db('posts').select();
		res.json(posts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get post by ID
exports.getPostById = async (req, res) => {
	try {
		const post = await db('posts').where({ id: req.params.id }).first();
		if (!post) return res.status(404).json({ error: 'Post not found' });
		res.json(post);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Create a new post
exports.createPost = async (req, res) => {
	const { title, content } = req.body;
	if (!title || !content)
		return res.status(400).json({ error: 'Title and content are required' });

	try {
		await db('posts').insert({ title, content });
		// res.status(201).json({newPost: { title, content }});
		// Optionally, you can return the newly created post
		const newPost = await db('posts').where({ title, content }).first();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Update a post
exports.updatePost = async (req, res) => {
	const { title, content } = req.body;

	try {
		const count = await db('posts')
			.where({ id: req.params.id })
			.update({ title, content, updated_at: new Date() });
		if (count === 0) return res.status(404).json({ error: 'Post not found' });

		const updatedPost = await db('posts').where({ id: req.params.id }).first();
		res.json(updatedPost);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Delete a post
exports.deletePost = async (req, res) => {
	try {
		const count = await db('posts').where({ id: req.params.id }).del();
		if (count === 0) return res.status(404).json({ error: 'Post not found' });
		res.status(204).send();
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

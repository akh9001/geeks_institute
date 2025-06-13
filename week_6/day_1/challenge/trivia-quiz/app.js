const express = require('express');
const app = express();
const quizRoutes = require('./routes/quiz');

app.use(express.json()); // To parse JSON bodies
app.use('/quiz', quizRoutes);

app.listen(3000, () => {
	console.log('🚀 Trivia Quiz running at http://localhost:3000/quiz');
});

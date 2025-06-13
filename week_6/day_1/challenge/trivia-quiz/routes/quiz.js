const express = require('express');
const router = express.Router();

const questions = [
	{ question: "What is the capital of France?", answer: "Paris" },
	{ question: "What is 5 + 3?", answer: "8" },
	{ question: "Who wrote 'Hamlet'?", answer: "Shakespeare" }
];

// Simulate user session in memory
let userProgress = {
	currentQuestion: 0,
	score: 0
};

// GET /quiz - Start the quiz / Show first question
router.get('/', (req, res) => {
	const index = userProgress.currentQuestion;
	if (index >= questions.length) {
		return res.redirect('/quiz/score');
	}
	res.json({
		question: questions[index].question,
		questionNumber: index + 1
	});
});

// POST /quiz - Submit answer and show next question
router.post('/', (req, res) => {
	const { answer } = req.body;
	const index = userProgress.currentQuestion;

	if (index >= questions.length) {
		return res.redirect('/quiz/score');
	}

	const correctAnswer = questions[index].answer;

	let feedback;
	if (answer && answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
		userProgress.score++;
		feedback = "✅ Correct!";
	} else {
		feedback = `❌ Incorrect. Correct answer was: ${correctAnswer}`;
	}

	userProgress.currentQuestion++;

	if (userProgress.currentQuestion >= questions.length) {
		return res.json({
			feedback,
			message: "Quiz finished!",
			finalScore: userProgress.score
		});
	}

	const nextQuestion = questions[userProgress.currentQuestion].question;

	res.json({
		feedback,
		nextQuestion,
		questionNumber: userProgress.currentQuestion + 1
	});
});

// GET /quiz/score - Show final score
router.get('/score', (req, res) => {
	res.json({
		message: "🎉 Quiz complete!",
		score: userProgress.score,
		totalQuestions: questions.length
	});

	// Reset user progress after showing score
	userProgress = { currentQuestion: 0, score: 0 };
});

module.exports = router;

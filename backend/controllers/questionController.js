const Question = require("../models/Question");

// Add a question
exports.addQuestion = async (req, res) => {
    const { question, options, correctAnswer, difficulty } = req.body;
    try {
        const newQuestion = await Question.create({ question, options, correctAnswer, difficulty });
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all questions
exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

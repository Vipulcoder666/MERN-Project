const Exam = require("../models/Exam");

// Create an exam
exports.createExam = async (req, res) => {
    const { title, questions, duration } = req.body;
    try {
        const exam = await Exam.create({ title, questions, duration });
        res.status(201).json(exam);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all exams
exports.getExams = async (req, res) => {
    try {
        const exams = await Exam.find().populate("questions");
        res.json(exams);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

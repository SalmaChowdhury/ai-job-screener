// server/controllers/screenerController.js

import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const handleFeedback = (req, res) => {
  const { resumeText, jobDescription } = req.body;

  
  res.json({
    feedback: `We received your resume and job description. This is a placeholder feedback.`,
  });
};

const handleInterviewPrep = (req, res) => {
  const { resumeText, jobDescription } = req.body;

  res.json({
    questions: [
      "Can you describe a challenge you've overcome?",
      "Why are you interested in this position?",
    ],
  });
};


export { handleFeedback, handleInterviewPrep };

// server/routes/screenerRoutes.js

import express from 'express';
import { handleFeedback, handleInterviewPrep } from '../controllers/screenerController.js';

const router = express.Router();

router.post('/analyze', handleFeedback);
router.post('/interview', handleInterviewPrep);

export default router;


import express from 'express';
import { createCandidate, getCandidates, getCandidateById } from '../controllers/candidateController';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Create a new candidate
router.post('/candidates', upload.single('cvFile'), createCandidate);

// Get all candidates
router.get('/candidates', getCandidates);

// Get a candidate by ID
router.get('/candidates/:id', getCandidateById);

export default router;

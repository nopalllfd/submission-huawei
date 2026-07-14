import express from 'express';
const router = express.Router();

import { getForms, createForm } from '../controllers/formController.js';

router.get('/', getForms);
router.post('/', createForm);

export default router;

import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller.js';

const router = Router();

router.post('/registro', AuthController.registrar);
router.post('/login', AuthController.login);
router.patch('/usuarios/:id/password', AuthController.cambiarPassword);

export default router;

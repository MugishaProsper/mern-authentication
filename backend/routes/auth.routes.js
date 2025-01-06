import express from 'express';
import { login, register, logout, verifyCode } from '../controllers/auth.controllers.js';
import { protectRoutes } from '../middlewares/protectedRoutes.js';

const auth_router = express.Router();

auth_router.post('/login', login);
auth_router.post('/register', register);
auth_router.post('/logout', logout);
auth_router.post('/verify', protectRoutes, verifyCode)

export default auth_router
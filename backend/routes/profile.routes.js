import express from 'express';
import { protectRoutes } from '../middlewares/protectedRoutes.js';
import { fetchProfileDetails, updateProfile } from '../controllers/user.controllers.js';

const profile_router = express.Router();

profile_router.get('/profile', protectRoutes, fetchProfileDetails);
profile_router.post('/profile/update', protectRoutes, updateProfile);

export default profile_router;
import express from 'express';
import { connectToDatabase } from './config/db.config.js';
import auth_router from './routes/auth.routes.js';

const app = express();

app.use(express.json())

app.use('/api/auth', auth_router)

app.listen(5000, () => {
  console.log('Connected to server on port 5000');
  connectToDatabase();
})
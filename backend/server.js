import express from 'express';
import { connectToDatabase } from './config/db.config.js';
import auth_router from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/auth', auth_router)

app.listen(5000, () => {
  console.log('Connected to server on port 5000');
  connectToDatabase();
})
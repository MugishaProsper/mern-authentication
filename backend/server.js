import express from 'express';
import { connectToDatabase } from './config/db.config.js';
import auth_router from './routes/auth.routes.js';
import cors from 'cors';
import profile_router from './routes/profile.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 5000

app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.get('/', (req, res) => {
  res.json({ message : 'Hello from backend' })
});

app.use('/api/auth', auth_router);
app.use('/api', profile_router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectToDatabase();
})
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectToDatabase = () => {
  try {
    mongoose.connect(process.env.database_url).then(() => console.log('Connected to MongoDB'));
  } catch (error) {
    console.error(error.message);
  }
}
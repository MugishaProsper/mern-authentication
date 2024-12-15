import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectToDatabase = () => {
  try {
    mongoose.connect(process.env.database_url);
    console.log('Connected to DB')
  } catch (error) {
    console.error(error.message);
  }
}
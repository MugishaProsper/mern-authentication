import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.database_url;

export const connectToDatabase = () => {
  try {
    mongoose.connect(url);
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error.message);
  }
}
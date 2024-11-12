import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/user.models';
dotenv.config();

export const protectRoutes = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    if(!token){
      return res.status(404).json({ message : "Token not found" });
    }
    const decoded = jwt.verify(token, jwt_secret);
    if(!decoded){
      return res.status(401).json({ message : "No token found" })
    };
    const user = await User.findById(decoded.userId).select("-password");
    if(!user){
      return res.status(401).json({ message : "No token found" });
    };
    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Error in protected routes middleware" })
  }
}
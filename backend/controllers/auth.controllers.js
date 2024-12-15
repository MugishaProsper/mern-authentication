import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generate.token.js'
import { sendVerificationEmail } from '../config/email.config.js';
import { generateVerificationCode } from '../utils/generate.verification.code.js';

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const user_exists = await User.findOne({ email });
    if(user_exists){
      return res.status(401).json({ message : 'User already exists' })
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;
    const newUser = new User({ firstName, lastName, username, email, password : hashedPassword, profilePic : profilePic });
    await newUser.save();
    const verificationCode = generateVerificationCode();
    await sendVerificationEmail(newUser.email, verificationCode);
    return res.status(200).json({ message : "Signup successful" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email : email });
    if(!user){
      return res.status(401).json({ message : "User not found" });
    };
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(401).json({ message : "Invalid password" });
    };
    await generateTokenAndSetCookie(user._id, res);
    res.status(200).json({ message : 'Login successful' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie('jwt', "", { maxAge : 0 });
    res.status(200).json({ message : 'Logged out successfully' })
  } catch (error) {
    console.error('Error logging out');
    return res.status(500).json({ message : "Error logging out" });
  }
}

export const verifyCode = async (req, res) => {
  const { code } = req.body;
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message : "User not found" });
    };
    if(code !== user.verification_code){
      return res.status(400).json({ message : "Invalid verification code" });
    }
    user.isVerified = true
    await user.save();
    return res.status(200).json({ message : "Code verified successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message : "Server error" });
  }
};

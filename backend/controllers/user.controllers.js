import { sendResetPassword } from "../config/email.config.js";
import User from "../models/user.models.js";
import { generateResetPassword } from "../utils/generate.reset.password.js";

export const updateProfile = async (req, res) => {
  const userId = req.user;
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message : 'User not found' });
    }
    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.username = username ? username : user.username;
    user.email = email ? email : user.email;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword ? password : user.password;
    await user.save();
    return res.status(200).json({ message : 'updated successfully' })
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message : 'internal server error' });
  }
};

export const fetchProfileDetails = async (req, res) => {
  const userId = req.user;
  try {
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({ message : "No user found" });
    };
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : 'server error' });
  }
};
export const forgotPassword = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message : "No user found" });
    }
    const resetPassword = generateResetPassword();
    await sendResetPassword(user.email, resetPassword);
    return res.status(200).json({ message : "Code sent to your email" })
  } catch (error) {
    console.error(error.message)
  }
};

export const resetPassword = async (req, res) => {
  const userId = req.user._id;
  const { resetCode } = req.body;

  try {
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({ message : "User not found" })
    }
    if(resetCode){}
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : 'Server error' })
  }
}
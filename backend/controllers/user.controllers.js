import User from "../models/user.models.js";

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
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message : "No user found" });
    };
    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message : 'server error' });
  }
}
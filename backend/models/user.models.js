import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName : { type : String, required : true },
  lastName : { type : String, required : true },
  username : { type : String, required : true },
  email : { type : String, required : true, unique : true },
  password : { type : String, required : true },
  profilePic : { type : String },
  verification_code : { type : String },
  isVerified : { type : Boolean, default : false },
}, { timestamps : true });

export const User = mongoose.model('User', userSchema);

export default User;
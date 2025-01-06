import mongoose from "mongoose";

const reset_codebaseSchema = mongoose.Schema({
  user : { type : mongoose.Schema.Types.ObjectId, ref : 'User' },
  code : { type : String , required : true }
})
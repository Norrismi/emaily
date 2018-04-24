const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 } // see mongoose docs for arguments. 
});

mongoose.model("users", userSchema); //loads schema into mongoose

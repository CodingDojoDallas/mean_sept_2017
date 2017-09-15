const mongoose = require("mongoose");
let UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true
  },
  last_name:{
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  birthday:{
    type: Date,
    require: true
  }
}, { timestamps: true });
mongoose.model('User', UserSchema);

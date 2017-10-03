const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2
    },
    lastname:{
        type: String,
        required: true,
        minlength:2
    },
    email:{
        type: String,
        required: true,
        minlength:2,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    bicycles:[
        {
        type: Schema.Types.ObjectId,
        ref: "Bicycle"
    }]
}, {timestamps:true});
userSchema.plugin(uniqueValidator, {message: "Email address already taken."});

const User = mongoose.model("User", userSchema);
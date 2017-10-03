const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;


const bicycleSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        minlength:2
    },
    description:{
        type: String,
        required: true,
        minlength:2,
        maxlength: 200
    },
    price:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true, 
    },
    _user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {timestamps:true});

const Bicycle = mongoose.model("Bicycle", bicycleSchema);
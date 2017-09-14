const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, { timestamps: true});

mongoose.model('User', UserSchema);
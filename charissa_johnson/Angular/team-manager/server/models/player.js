const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
    	type:String, 
    	required: true, 
    	minlength: 2
    },
    position: {
    	type:String
    },
    status: {
    	type:Object
    }
}, { timestamps: true });
const Player = mongoose.model('Player', PlayerSchema);
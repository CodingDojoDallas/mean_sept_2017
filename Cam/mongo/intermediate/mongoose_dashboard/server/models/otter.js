var mongoose = require('mongoose');
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var OtterSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:3},
    description: { type: String, required: true, minlength: 3}
}, {timestamps: true});
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
var Otter = mongoose.model('Otter', OtterSchema)
// require mongoose
const mongoose = require('mongoose');
// require the fs module for loading model files
const fs = require('fs');
// require path for getting the models path
const path = require('path');
// connect to mongoose!
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bicycleMarketplace', {useMongoClient: true});
// create a variable that points to the path where all of the models live
const models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
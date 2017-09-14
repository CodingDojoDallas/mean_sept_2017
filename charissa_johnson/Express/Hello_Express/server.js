//Load the express module (Where do you think this comes from?)
var express = require("express");

//Requiring express returns a CreateApplication function that we store in the express variable before we invoke it
var app = express();

//this is the line that tells our server to use the '/static' folder for static content
app.use(express.static(__dirname + "/static"));

//this sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

//set the view engine itself so that express knows that we are using ejs as oppossed to another templating engine
app.set('view engine', 'ejs');

//handle the base route '/' and respond with "Hello Express"
app.get('/', function(request, response){
	response.send("<h1>Hello Express</h1>");
});

//Add a 'database' route the will render an ejs view and pass it some user data
app.get("/users", function(request, response){
	//hard-coded user data
	var users_array = [
		{name: "Tashi", email: "tashi@gmail.com"},
		{name: "Ruby", email: "ruby@gmail.com"},
		{name: "Charissa", email: "charissa@gmail.com"},
		{name: "Courtney", email: "courtney@gmail.com"}
	];
	response.render('users', {users: users_array});
});

//Tell the express app to listen on port 8000
app.listen(8000, function(){
	console.log("listening on port 8000");
});
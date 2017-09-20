let express = require('express');
let bodyParser = require('body-parser');

let app = express();
//.set
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//.use
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
	{id: 1, name: 'Cody' },
	{id: 2, name: 'Bob' },
	{id: 3, name: 'Tim' },
]

//routes
app.get('/', function(request, response){
	//pass data through to the view
	
	response.render('index.ejs', { 'users': users })
})

app.get('/nextPage', function(request, response){
	response.render('nextpage.ejs')
})

app.post('/users', function(request, response){
	console.log(request.body.name);
	let newId = users[users.length - 1].id + 1
	let userObj = {
		id: newId,
		name: request.body.name
	}
	users.push(userObj);
	response.redirect('/')
})

//always goes at the bottom of the document
app.listen(8000, function(){
	console.log(`listening on port 8000...`)
});
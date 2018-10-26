var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc)=>{
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});
app.listen(3000,() => {
	console.log('Started on port 3000');
});
//create a model
// let newTodo = new Todo({
// 	text: ' Edit this video  '
// });
// newTodo.save().then((doc) => {
// 	console.log('Saved todo',doc);
// },(e) => {
// 	console.log('Unable to save todo')
// }); //save to mongodb database

// let newTodo2 = new Todo({
// 	text: 'Study Node.js',
// 	completed: true,
// 	completedAt: 2400
// });
// newTodo2.save().then((doc) => {
// 	console.log('Saved todo',doc);
// },(e) => {
// 	console.log('Unable to save todo')
// })

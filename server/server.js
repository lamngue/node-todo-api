var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
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
app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e) => {
		res.status(400).send(e);
	});
});
// GET /todos/id 
app.get('/todos/:id',(req,res) => {
	let {id} = req.params;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findById(id).then((todo) => {
		if(todo){
			return res.send({todo});
		}else{
			return res.status(404).send();
		}
	}).catch((e) => {
		return res.status(400).send();
	});
});
app.listen(3000,() => {
	console.log('Started on port 3000');
});
module.exports = {app};
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

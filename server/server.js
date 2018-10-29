require('./config/config.js');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
const _ = require('lodash');
var app = express();
const port = process.env.PORT;
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
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});	
	}).catch((e) => {
		return res.status(400).send();
	});
});
app.delete('/todos/:id',(req,res) => {
	const {id} = req.params;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findOneAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		return res.status(400).send();
	});
});
app.patch('/todos/:id',(req,res) => {
	const {id} = req.params;
	const body = _.pick(req.body,['text','completed']);
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	if(_.isBoolean(body.completed)&&body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}
	Todo.findByIdAndUpdate(id,{$set: body},{new: true}).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});
//POST /users
app.post('/users',(req,res) => {
	const body = _.pick(req.body,['email','password']);
	let user = new User(body);
	user.save().then((doc) => {
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});
app.listen(port,() => {
	console.log(`Started on port ${port}`);
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

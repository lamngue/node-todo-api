const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose.js');
const {Todo} = require('../server/models/todo.js');
const {User} = require('../server/models/user.js');
let id = '5bc89fcf8159a8e44dd08a6e'
// let id = '5bd469a2c7e4b84e379d25e2';
// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });
    
// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID',todo);
// }).catch((e) => console.log(e)); 

// User.findById('5bc89fcf8159a8e44dd08a6e').then((user)=>{
// 	if(!user){
// 		return console.log('User not found');
// 	}
// 	console.log('User by ID',user);
// }).catch((e) => console.log(e));

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });
Todo.findOneAndRemove({_id: '5bd61f4ca075cb4aa66f0142'}).then((todo) => {
	console.log(todo);
});
Todo.findOneAndRemove('5bd61f4ca075cb4aa66f0142').then((todo) => {
	console.log(todo);
})